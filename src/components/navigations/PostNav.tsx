import { IonButton, IonHeader, IonToolbar } from "@ionic/react";
import InstagramLogo from "../../assets/svg/instagram-logo.svg";
import HeartIcon from "../../assets/svg/heart-icon.svg";
import AddtIcon from "../../assets/svg/add-icon.svg";
import MessengerIcon from "../../assets/svg/messenger-icon.svg";

import "./PostNav.scss";
export default function PostNav() {
  return (
    <IonHeader class="flex justify-between items-center px-[15px] py-[3px] shadow-none bg-white">
      <img src={InstagramLogo} alt="Instagram Logo" />

      <div className="flex  gap-5">
        <IonButton>
          <img src={AddtIcon} alt="Instagram Logo" />
        </IonButton>
        <IonButton>
          <img src={HeartIcon} alt="Instagram Logo" />
        </IonButton>
        <IonButton>
          <img src={MessengerIcon} alt="Instagram Logo" />
        </IonButton>
      </div>
    </IonHeader>
  );
}
