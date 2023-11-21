import { Cookies } from 'react-cookie';
import { getForEntity, postForEntity } from '../network/HttpRequests';

const cookies = new Cookies(document.cookie);

const setAccessKeyInCookies = accessKey => {
  cookies.set('Authorization', accessKey, { path: '/', maxAge: 1209600000 });
};

export const removeAccessKeyInCookies = () => cookies.remove('Authorization');

export const AuthType = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};

class Authentication {
  static shared = new Authentication();

  // Recoil은 React component 밖에서 직접 접근할 수 없기 때문에, initialize를 통해 Recoil 상태를 세팅하기 위한 함수를 받아오도록 한다.
  initialize(setLoginState, setAuthType, setUserInfo) {
    this.setLoginState = setLoginState;
    this.setAuthType = setAuthType;
    this.setUserInfo = setUserInfo;
  }

  // 가급적 private하게 유지
  async setLoginInfo(type, accessKey) {
    setAccessKeyInCookies(accessKey);
    if (this.setLoginState) this.setLoginState(true);
    // TODO: User 정보를 받아오는 API 후 어드민인지 여부를 확인해서 setAuthType을 호출해서 저장하고, 유저 정보는 setUserInfo를 호출해서 저장 필요
    // TODO: 실패 시 logout
  }

  async login(email, password) {
    const response = postForEntity(`/user/login`, { email, password });
    if (response.status === 200) {
      // TODO: get cookie and set login state
      const { type } = response.data;
      this.setLoginInfo(type, response.data.accessKey);
    }
    return false;
  }

  logout() {
    removeAccessKeyInCookies();
    if (this.setLoginState) this.setLoginState(false);
    if (this.setAuthType) this.setAuthType(null);
    if (this.setUserInfo) this.setUserInfo(null);
  }

  testLogin(type) {
    if (this.setLoginState) this.setLoginState(true);
    if (this.setAuthType) this.setAuthType(type);
  }

  async loadWorkerInfoFromCookie() {
    const cookie = new Cookies(document.cookie);
    const accessKey = cookie.get('Authorization');
    await this.setLoginInfo('', accessKey);
  }
}

export default Authentication;
