import { css } from "@emotion/react";

export const userPostingContainer = css({
  border: "1px solid #e1e1e1",
  borderRadius: 8,
  padding: "0.2rem",
  marginBottom: "1em",
  background: "#fff",
});

export const inputPost = css({
  resize: "none",
  width: "100%",
  padding: "1em 1em",
  fontSize: "1.5rem",
  color: "#606770",
  border: "none",
  outline: "none",
  MozBorderRadiusTopleft: 8,
  MozBorderRadiusTopright: 8,
  borderBottom: "1px solid #e1e1e1",
  "&:focus::placeholder": {
    color: "transparent",
  },
});

export const postButton = css({
  outline: "none",
  border: "none",
  background: "#f76806",
  color: "#fff",
  borderRadius: 3,
  width: "10rem",
  height: "3rem",
  display: "block",
  margin: "0.3em 1em 0.3em auto",
  fontSize: "1.5rem",
  cursor: "pointer",
});
