import { atom } from 'recoil';

// boolean | null
export const loginAtom = atom({
  key: 'loginState',
  default: null,
});

// User 정보 | null
export const userAtom = atom({
  key: 'userInfo',
  default: null,
});
