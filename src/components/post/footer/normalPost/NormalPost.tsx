import heart from "../../../../assets/svg/heart-icon.svg";
import comment from "../../../../assets/svg/comment-icon.svg";
import share from "../../../../assets/svg/share-icon.svg";
import bookmark from "../../../../assets/svg/bookmark-icon.svg";
import emoji1 from "../../../../assets/svg/emoji-1.svg";
import emoji2 from "../../../../assets/svg/emoji-2.svg";
import addObjects from "../../../../assets/svg/add-objects-icon.svg";

import PostHeaderImg from "../../../../assets/img/post-header-img-1.png";
import { IonInput, IonText } from "@ionic/react";
import { useState } from "react";
import BulletsWrapper from "./Bullets/BulletsWrapper";

export default function NormalPost({
  isLiked,
  isBookMarked,
  likes,
  slidesCount,
  activeSlideIndex,
}: {
  isLiked: boolean;
  isBookMarked: boolean;
  likes: number;
  slidesCount: number;
  activeSlideIndex: number;
}) {
  const [text, setText] = useState("");
  return (
    <div className="px-3 py-[9px]">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-[14px] flex-[0.33]">
          <img src={heart} alt="" />
          <img src={comment} alt="" />
          <img src={share} alt="" />
        </div>
        <BulletsWrapper
          slidesCount={slidesCount}
          activeSlideIndex={activeSlideIndex}
        />

        <div className="flex flex-col items-end flex-[0.33]">
          <img src={bookmark} alt="" />
        </div>
      </div>

      <IonText color={"dark"}>
        <p className="font-bold text-[13px] leading-[22px]">{likes} Likes</p>
      </IonText>

      <IonText>
        <p className="font-normal text-[13px] leading-[15px] mb-2">
          <span className="font-bold">Username </span>Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...{" "}
          <span className="text-black text-opacity-50 cursor-pointer">
            more
          </span>
        </p>
      </IonText>

      <div className="flex items-center gap-[14px]">
        <div className="w-[24px] h-[24px]">
          <img src={PostHeaderImg} alt="" />
        </div>
        <IonInput
          value={text}
          placeholder="Add comment..."
          onIonChange={(e) => setText(e.detail.value!)}
        ></IonInput>

        <div className="flex items-center gap-[14px]">
          <img src={emoji1} alt="" />
          <img src={emoji2} alt="" />
          <img src={addObjects} alt="" />
        </div>
      </div>

      <IonText>
        <p className="text-[#999999] text-[11px] leading-[22px] font-normal">
          10 minutes ago
        </p>
      </IonText>
    </div>
  );
}
