"use client";

import Link from "next/link";
import { Heading } from "@chakra-ui/react";
import PostCardItem from "@/components/PostCardItem";
import useSWR from "swr";

export default function Page() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/post",
    //`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=post`,
    fetcher
  );

  if (error) {
    return <div> Failed to Load</div>;
  }

  if (isLoading) {
    return <div> Loading from SWR ... </div>;
  }

  return (
    <div className="post">
      <Heading> Articles </Heading>
      {data?.posts?.items?.map((item, index) => {
        return (
          <Link href={`/post/${item.sys.id}`}>
            <PostCardItem
              title={item.fields.title}
              createdAt={item.sys.createdAt}
              description={item.fields.description}
            ></PostCardItem>
          </Link>
        );
      })}
    </div>
  );
}
