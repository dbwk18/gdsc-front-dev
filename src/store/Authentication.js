import { Cookies } from 'react-cookie';

const cookies = new Cookies(document.cookie);

const setAccessKeyInCookies = accessKey => {
  cookies.set('Authorization', accessKey, { path: '/', maxAge: 1209600000 });
};

export const removeAccessKeyInCookies = () => cookies.remove('Authorization');

class Authentication {
  static shared = new Authentication();

  // Recoil은 React component 밖에서 직접 접근할 수 없기 때문에, initialize를 통해 Recoil 상태를 세팅하기 위한 함수를 받아오도록 한다.
  initialize(setLoginState, setUserInfo) {
    this.setLoginState = setLoginState;
    this.setUserInfo = setUserInfo;
  }

  // 가급적 private하게 유지
  async setLoginInfo(type, accessKey) {
    setAccessKeyInCookies(accessKey);
    if (this.setLoginState) this.setLoginState(true);
    // TODO: User 정보를 받아오는 API 후 setUserInfo를 호출해서 저장 필요
  }

  async login(type, accessKey) {
    this.setLoginInfo(type, accessKey);
  }

  logout() {
    removeAccessKeyInCookies();
    if (this.setLoginState) this.setLoginState(false);
    if (this.setUserInfo) this.setUserInfo(null);
  }

  testLogin() {
    if (this.setLoginState) this.setLoginState(true);
  }

  async loadWorkerInfoFromCookie() {
    const cookie = new Cookies(document.cookie);
    const accessKey = cookie.get('Authorization');
    await this.setLoginInfo('', accessKey);
  }
}

export default Authentication;
