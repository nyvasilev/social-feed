import moment from "moment";
import {
  userCardContainer,
  userCardHeader,
  userCardInfo,
  userCardBody,
  userCardBodyPost,
  userCardsBodyLikes,
  userCardFooter,
} from "./styles";
import { useStore, useActions } from "../../store/store";

export const UserFeedComponent = ({ user }) => {
  return (
    <div css={userCardContainer}>
      {/* header */}
      <div css={userCardHeader}>
        <div css={userCardInfo}>
          <img src={user.avatar} alt="user-image" className="user-image" />
          <div>
            <p className="name">
              {user.firstName} {user.lastName}
            </p>
            <span className="position">
              {user.position}, {user.company}
            </span>
          </div>
        </div>
        <p className="post-time">{moment(user.time).fromNow()}</p>
      </div>

      {/* body */}
      <div css={userCardBody}>
        <div css={userCardBodyPost}>
          <p className="post">{user.post.text}</p>
          <span className="see-more">...see more</span>
        </div>
        {user.post.likesCount > 0 && (
          <div css={userCardsBodyLikes}>
            <i className="fa-regular fa-thumbs-up"></i>
            <span className="likes-count">{user.post.likesCount}</span>
          </div>
        )}
      </div>

      {/* footer */}
      <div css={userCardFooter}>
        <button
          className="likes-container"
          onClick={() => useActions.updateUser(user)}
        >
          <i className="fa-regular fa-thumbs-up"></i>
          <span className="likes-count">{user.isLiked ? "Liked" : "Like"}</span>
        </button>
        <div className="share-container">
          <i className="fa-solid fa-share"></i>
          <span className="share">Share</span>
        </div>
      </div>
    </div>
  );
};
