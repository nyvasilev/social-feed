import { forwardRef } from "react";
import { userMiniProfileContainer } from "./styles";

export const UserMiniProfile = forwardRef((props, ref) => {
  return (
    <div ref={ref} css={userMiniProfileContainer}>
      <p className="my-profile">My Profile</p>
      <p className="log-out">Log out</p>
    </div>
  );
});
