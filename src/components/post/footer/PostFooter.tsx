import CTAPost from "./CTAPost/CTAPost";
import NormalPost from "./normalPost/NormalPost";

export default function PostFooter({
  type,
  isLiked,
  isBookMarked,
  likes,
  slidesCount,
  activeSlideIndex,
}: {
  type: "normal" | "CTA";
  isLiked: boolean;
  isBookMarked: boolean;
  likes: number;
  slidesCount: number;
  activeSlideIndex: number;
}) {
  if (type === "normal")
    return (
      <NormalPost
        isLiked={isLiked}
        isBookMarked={isBookMarked}
        likes={likes}
        slidesCount={slidesCount}
        activeSlideIndex={activeSlideIndex}
      />
    );
  return (
    <CTAPost
      isLiked={isLiked}
      isBookMarked={isBookMarked}
      likes={likes}
      slidesCount={slidesCount}
      activeSlideIndex={activeSlideIndex}
    />
  );
}
