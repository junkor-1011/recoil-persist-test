import { atom } from 'recoil'
import {recoilPersist} from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === "undefined" ? undefined :localStorage,
});

// const localStorageEffect = (key: any) => ({setSelf, onSet}: any) => {
//   const savedValue = localStorage.getItem(key)
//   if (savedValue != null) {
//     setSelf(JSON.parse(savedValue));
//   }
// 
//   onSet((newValue, _, isReset) => {
//     isReset
//       ? localStorage.removeItem(key)
//       : localStorage.setItem(key, JSON.stringify(newValue));
//   });
// };

export const hogeState = atom<string>({
  key: 'Hoge',
  default: 'fuga',
  effects_UNSTABLE: [persistAtom],
  // effects: [localStorageEffect('hoge')]
})
