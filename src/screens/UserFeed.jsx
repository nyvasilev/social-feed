import { useEffect, useState } from "react";
import {
  UserInfoComponent,
  UserFeedComponent,
  UserPostingComponent,
} from "../components";
import { feedsContainer, feedsLine } from "./styles";
import { useStore, useActions } from "../store/store";

export const UserFeed = () => {
  const { user, users } = useStore();

  useEffect(() => {
    useActions.fetchUsers();
  }, []);

  return (
    <div css={feedsContainer}>
      <UserInfoComponent user={user && user[0]} />
      <div css={feedsLine}>
        <UserPostingComponent />
        {users?.length
          ? users.map((user, index) => (
              <UserFeedComponent key={index} user={user} />
            ))
          : null}
      </div>
    </div>
  );
};
