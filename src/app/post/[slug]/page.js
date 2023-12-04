import Image from "next/image";

import { getItem } from "./../../../utils/getPostDetail";
import { Heading } from "@chakra-ui/react";

// static metadata
// export const metadata = {
//   title: "Yudhistira Media - Blog List ",
//   description: "Yudhistira Media channel",
// };

// dynamic metadata
export async function generateMetadata({ params }, parent) {
  const slug = params.slug;

  const blogDetail = await getItem(slug);

  return {
    title: blogDetail?.title + " - " + "Yudhistira Media",
    description: blogDetail?.title,
  };
}

export default async function Page({ params }) {
  const image = "";

  const { slug } = params;
  const blogDetail = await getItem(slug);

  console.log(blogDetail);

  return (
    <div className="post-detail">
      <div className="hero">
        <Image src={image} width={"100%"} height={"100%"} />
      </div>
      <Heading as={"h3"} style={{ margin: "20px 0" }}>
        {" "}
        {blogDetail?.fields?.title}{" "}
      </Heading>
      <div>{blogDetail?.fields?.description}</div>
    </div>
  );
}
