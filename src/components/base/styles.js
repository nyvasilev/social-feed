import { css } from "@emotion/react";

export const headerContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1em 2em",
  top: 0,
  position: "sticky",
  zIndex: 1,
  background: "#fff",
  "& .fa-solid": {
    fontSize: "1.5rem",
  },
  "& .fa-chevron": {
    marginRight: "1em",
    fontSize: "1.2rem",
  },
});

export const headerLogo = css({
  width: "5rem",
  height: "5rem",
});

export const userProfileButton = css({
  border: "none",
  outline: "none",
  background: "#fff",
  width: "5rem",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  "& .user-image": {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
  },
});

export const footerContainer = css({
  background: "#fff",
  padding: "3rem",
  fontSize: "1.5rem",
  color: "#1f1f1f",
});
