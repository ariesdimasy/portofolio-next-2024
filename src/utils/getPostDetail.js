import { cache } from "react";

export const revalidate = 10;

export const getItem = cache(async (id) => {
  const item = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  return item.json();
});
