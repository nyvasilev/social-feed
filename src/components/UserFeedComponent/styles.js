import { css } from "@emotion/react";

export const userCardContainer = css({
  border: "1px solid #e1e1e1",
  marginBottom: "1em",
  borderRadius: 8,
  background: "#fff",
  "& .post-time": {
    color: "#606770",
    fontSize: "1.2rem",
  },
});

export const userCardHeader = css({
  display: "flex",
  justifyContent: "space-between",
  padding: "1.5em 1.5em 0 1.5em",
});

export const userCardInfo = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1em",
  fontSize: "1rem",
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

export const userCardBody = css({
  padding: "1em 1.5em 0 1.5em",
  "& .see-more": {
    display: "flex",
    justifySelf: "end",
    fontSize: "1rem",
  },
});

export const userCardBodyPost = css({
  "& .post": {
    fontSize: "1.5rem",
  },
});

export const userCardsBodyLikes = css({
  "& .fa-regular": {
    marginRight: "0.5em",
    background: "#f76806",
    color: "#fff",
    padding: "0.5em",
    borderRadius: "50%",
  },
  "& .likes-count": {
    fontSize: "1.2rem",
    color: "#606770",
  },
});

export const userCardFooter = css({
  padding: "1.5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid #e1e1e1",
  marginTop: "1em",
  paddingTop: "1em",

  "& .likes-container, .share-container": {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    background: "#fff",
    cursor: "pointer",
    padding: "0.5em",
    borderRadius: 8,
    "&:hover": {
      background: "#e1e1e180",
    },
  },
  "& .fa-thumbs-up": {
    marginRight: "0.3em",
    fontSize: "2rem",
    color: "#606770",
  },
  "& .likes-count": {
    fontSize: "1.5rem",
    color: "#606770",
  },
  "& .fa-share": {
    marginRight: "0.3em",
    fontSize: "2rem",
    color: "#606770",
  },
  "& .share": {
    fontSize: "1.5rem",
    color: "#606770",
  },
});
