import { userInfoContainer, userInfo, userInfoActivity } from "./styles";

export const UserInfoComponent = ({ user }) => {
  return (
    <div css={userInfoContainer}>
      <div css={userInfo}>
        <img src={user?.avatar} alt="user-image" className="user-image" />
        <div>
          <p className="name">{user?.name}</p>
          <p className="position">
            {user?.position}, {user?.company}
          </p>
        </div>
      </div>
      <div css={userInfoActivity}>
        <div className="likes-container">
          <p className="likes-count">{user?.likesCount}</p>
          <p className="likes-label">Likes</p>
        </div>
        <div className="posts-container">
          <p className="posts-count">{user?.postsCount}</p>
          <p className="posts-label">Posts</p>
        </div>
      </div>
    </div>
  );
};
