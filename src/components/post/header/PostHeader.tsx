import CTAPost from "./CTAPost/CTAPost";
import NormalPostHeader from "./normalPost/NormalPostHeader";

export default function PostHeader({
  type,
  postAuthorName,
  postAuthorProfileImageUrl,
}: {
  type: "normal" | "CTA";
  postAuthorName: string;
  postAuthorProfileImageUrl: string;
}) {
  if (type == "normal")
    return (
      <NormalPostHeader
        postAuthorName={postAuthorName}
        postAuthorProfileImageUrl={postAuthorProfileImageUrl}
      />
    );
  return (
    <CTAPost
      postAuthorName={postAuthorName}
      postAuthorProfileImageUrl={postAuthorProfileImageUrl}
    />
  );
}
