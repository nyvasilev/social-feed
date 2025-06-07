import { css } from "@emotion/react";

export const userInfoContainer = css({
  border: "1px solid #e1e1e1",
  borderRadius: 8,
  flex: "1 1 30rem",
  minWidth: "30rem",
  background: "#fff",
});

export const userInfo = css({
  display: "flex",
  alignItems: "center",
  gap: "1em",
  fontSize: "1rem",
  gridColumn: "1 / -1",
  padding: "1em",
  "& .user-image": {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
  },
  "& .name": {
    fontWeight: 600,
    fontSize: "1.5rem",
  },
  "& .position, .company": {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#606770",
  },
});

export const userInfoActivity = css({
  display: "flex",
  "& .likes-container, .posts-container": {
    borderTop: "1px solid #e1e1e1",
    padding: "1em",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  "& .posts-container": {
    borderLeft: "1px solid #e1e1e1",
  },
  "& .likes-count, .posts-count": {
    fontSize: "1.8rem",
    fontWeight: 600,
  },
  "& .likes-label, .posts-label": {
    fontSize: "1.3rem",
    color: "#606770",
  },
});
