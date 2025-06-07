import { css } from "@emotion/react";

export const userMiniProfileContainer = css({
  position: "absolute",
  top: "7.5em",
  right: "2em",
  background: "#fff",
  borderRadius: 8,
  padding: "1em",
  width: "15rem",
  border: "1px solid #e1e1e1",
  "& .my-profile, .log-out": {
    fontSize: "1.3rem",
    padding: "0.5em",
    "&:hover": {
      background: "#e1e1e130",
      cursor: "pointer",
    },
  },
});
