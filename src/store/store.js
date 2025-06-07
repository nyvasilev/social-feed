import { create } from "zustand";
import { createActions } from "./actions";

// store/state.js
export const initialState = {
  count: 0,
  user: null,
  users: null,
  loading: false,
  error: null,
};

export const useStore = create((set, get) => ({
  ...initialState,
  ...createActions(set, get),
}));

export const useActions = {
  fetchUser: () => useStore.getState().fetchUser(),
  fetchUsers: () => useStore.getState().fetchUsers(),
  addPost: (user, post) => useStore.getState().addPost(user, post),
  updateUser: (user) => useStore.getState().updateUser(user),
};

export const getState = useStore.getState;
export const setState = useStore.setState;
