import moment from "moment";
import { get } from "./common/get";

export const getFeed = async () => {
  const data = await get("/feedDatabase.json");

  const sorted = data.sort((a, b) =>
    moment(b.post.time).diff(moment(a.post.time)),
  );

  return sorted;
};
