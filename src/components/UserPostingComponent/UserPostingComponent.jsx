import { useState } from "react";
import { useStore, useActions } from "../../store/store";
import { userPostingContainer, inputPost, postButton } from "./styles";

export const UserPostingComponent = () => {
  const [post, setPost] = useState({ text: "", image: null });
  const { user } = useStore();

  const handlePostChange = (e) => setPost({ text: e.target.value });

  const handleAddPost = async () => {
    await useActions.addPost(user, post);
    setPost((prev) => ({ ...prev, text: "" }));
  };

  return (
    <div css={userPostingContainer}>
      <textarea
        type="text"
        placeholder="Share something to the community..."
        css={inputPost}
        onChange={handlePostChange}
      />
      <div>
        <button
          disabled={!post?.text}
          type="button"
          css={postButton}
          onClick={handleAddPost}
        >
          Post
        </button>
      </div>
    </div>
  );
};
