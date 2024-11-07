import { v4 as uuidv4 } from "uuid";
export const generateId = (length = 8) => {
  const uuid = uuidv4().split("-").join("").slice(0, length);
  return uuid;
};
