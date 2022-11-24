import create from 'zustand/react';

const useStore = create(set => ({
  accessToken: null,
  isLoading: true,
  signIn: newToken => set(state => ({accessToken: newToken, isLoading: false})),
  signOut: () => set(state => ({accessToken: null, isLoading: false})),
  signUp: newToken => set(state => ({accessToken: newToken, isLoading: false})),
}));

export default useStore;
