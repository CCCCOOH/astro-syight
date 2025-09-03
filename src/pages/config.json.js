import { article } from "../config/site";
const {default_cover} = article;

export const GET = async () => {
  const searchData = {
    default_cover
  };

  return new Response(JSON.stringify(searchData));
};