import { useState } from "react";
import PostContent from "./content/PostContent";
import PostFooter from "./footer/PostFooter";
import PostHeader from "./header/PostHeader";

type contents = {
  postAuthorName: string;
  postAuthorProfileImageUrl: string;
  imagesUrl: string[];
  isLiked: boolean;
  isBookMarked: boolean;
  likes: number;
};

export default function Post({
  postType,
  postAuthorName,
  postAuthorProfileImageUrl,
  imagesUrl,
  isLiked,
  isBookMarked,
  likes,
}: {
  postType: "normal" | "CTA";
  postAuthorName: string;
  postAuthorProfileImageUrl: string;
  imagesUrl: string[];
  isLiked: boolean;
  isBookMarked: boolean;
  likes: number;
}) {
  const [slidesCount, setSlidesCount] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <PostHeader
        type={postType}
        postAuthorName={postAuthorName}
        postAuthorProfileImageUrl={postAuthorProfileImageUrl}
      />
      <PostContent
        imagesUrl={imagesUrl}
        setSlidesCount={setSlidesCount}
        setActiveSlideIndex={setActiveSlideIndex}
      />
      <PostFooter
        isLiked={isLiked}
        isBookMarked={isBookMarked}
        likes={likes}
        type={postType}
        slidesCount={slidesCount}
        activeSlideIndex={activeSlideIndex}
      />
    </>
  );
}
