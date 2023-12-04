/*
/spaces/yadj1kx9rmg0/environments/staging/assets/wtrHxeu3zEoEce2MokCSi?access_token=fdb4e7a3102747a02ea69ebac5e282b9e44d28fb340f778a4f5e788625a61abe
*/

import { cache } from "react";

export const revalidate = 10;

export const getAsset = cache(async (id) => {
  const item = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/assets/${id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  return item.json();
});
