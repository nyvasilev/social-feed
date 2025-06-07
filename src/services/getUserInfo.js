import { get } from "./common/get";

export const getUserInfo = async () => {
  const data = await get("/usersDatabase.json");
  return data;
};
