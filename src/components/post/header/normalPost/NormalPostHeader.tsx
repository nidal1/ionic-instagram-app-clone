import { IonButton, IonHeader } from "@ionic/react";

import PostHeaderImg from "../../../../assets/img/post-header-img-1.png";
import MoreIcon from "../../../../assets/svg/more-icon.svg";
export default function NormalPostHeader({
  postAuthorName,
  postAuthorProfileImageUrl,
}: {
  postAuthorName: string;
  postAuthorProfileImageUrl: string;
}) {
  return (
    <IonHeader className="h-[49px] shadow-none flex items-center justify-between px-[8px] border-t-[1px] border-t-[#DADADA]">
      <div className="flex items-center gap-[9px]">
        <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
          <img src={postAuthorProfileImageUrl} alt="" />
        </div>
        <p className="text-xs leading-[22px] font-bold text-black">
          {postAuthorName}
        </p>
      </div>
      <IonButton>
        <img src={MoreIcon} alt="" />
      </IonButton>
    </IonHeader>
  );
}
