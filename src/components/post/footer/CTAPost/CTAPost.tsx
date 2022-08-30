import { IonText } from "@ionic/react";
import NormalPost from "../normalPost/NormalPost";
import dropdown from "../../../../assets/svg/dropdown-icon.svg";

export default function CTAPost({
  isLiked,
  isBookMarked,
  likes,
  slidesCount,
  activeSlideIndex,
}: {
  isLiked: boolean;
  isBookMarked: boolean;
  likes: number;
  activeSlideIndex: number;
  slidesCount: number;
}) {
  return (
    <>
      <div className="bg-[#FF4963] px-3 pt-[9px] pb-[11px] flex items-center justify-between">
        <IonText color={"light"}>
          <p>CTA copy here</p>
        </IonText>

        <img src={dropdown} alt="" />
      </div>
      <NormalPost
        isLiked={isLiked}
        isBookMarked={isBookMarked}
        likes={likes}
        slidesCount={slidesCount}
        activeSlideIndex={activeSlideIndex}
      />
    </>
  );
}
