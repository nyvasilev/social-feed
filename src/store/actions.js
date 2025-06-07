import { getFeed, getUserInfo } from "../services";

export const createActions = (set, get) => ({
  fetchUser: async () => {
    const user = await getUserInfo();
    set({ user });
    return user;
  },

  fetchUsers: async () => {
    const users = await getFeed();
    set({ users });
    return users;
  },

  addPost: async (user, post) => {
    const users = get().users;
    users.unshift({ ...user[0], post });
    set({ users });
  },

  updateUser: async ({ id, time }) => {
    const user = get().user;
    const users = get().users;

    const userUpdated = user.map((user) =>
      user.id === id ? { ...user, likesCount: user.likesCount + 1 } : user,
    );

    const usersUpdated = users.map((user) =>
      user.time === time
        ? {
            ...user,
            isLiked: user.isLiked === true ? false : true,
            post: {
              ...user.post,
              likesCount: user.isLiked
                ? user.post.likesCount - 1
                : user.post.likesCount + 1,
            },
          }
        : user,
    );

    set({ user: userUpdated, users: usersUpdated });
  },
});
