import { atom } from 'recoil';

// boolean | null
export const loginAtom = atom({
  key: 'loginState',
  default: null,
});

// 'ADMIN' | 'USER' | null, 유저 정보에 type 같이 오면 사실 없어도 됨
export const authTypeAtom = atom({
  key: 'authType',
  default: null,
});

// User 네임 | null
export const userAtom = atom({
  key: 'userInfo',
  default: null,
});
