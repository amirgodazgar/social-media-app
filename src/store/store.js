import create from 'zustand';

const useAuthStore = create(set => ({
  accessToken: undefined,
  userInfo: null,

  signIn: newToken => set(() => ({accessToken: newToken})),

  signUp: newToken => set(() => ({accessToken: newToken})),

  signOut: () => set(() => ({accessToken: undefined})),

  setUserInfo: info => set(() => ({userInfo: info})),

  removeUserInfo: () => set(() => ({userInfo: null})),
}));

export default useAuthStore;
