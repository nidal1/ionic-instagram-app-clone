import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Tab1 from "../../../pages/Tab1";
import Tab2 from "../../../pages/Tab2";
import Tab3 from "../../../pages/Tab3";

import homeIcon from "../../../assets/svg/home-icon.svg";
import searchIcon from "../../../assets/svg/search-icon.svg";
import reelsIcon from "../../../assets/svg/reels-icon.svg";
import shopIcon from "../../../assets/svg/shop-icon.svg";
import profileImg from "../../../assets/img/post-header-img-1.png";

import homeSolidIcon from "../../../assets/svg/home-solid-icon.svg";
import searchSolidIcon from "../../../assets/svg/search-solid-icon.svg";
import reelsSolidIcon from "../../../assets/svg/reels-solid-icon.svg";
import shopSolidIcon from "../../../assets/svg/shop-solid-icon.svg";

import "./MainNavigation.scss";
import { useState } from "react";
export default function MainNavigation() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  return (
    <IonReactRouter>
      <IonTabs
        onIonTabsWillChange={({ detail }) => {
          setSelectedTab(detail.tab);
        }}
      >
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="pt-[10px] h-[71px] items-start">
          <IonTabButton tab="tab1" href="/tab1">
            {selectedTab !== "tab1" ? (
              <img src={homeIcon} alt="" />
            ) : (
              <img src={homeSolidIcon} alt="" />
            )}
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            {selectedTab !== "tab2" ? (
              <img src={searchIcon} alt="" />
            ) : (
              <img src={searchSolidIcon} alt="" />
            )}
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            {selectedTab !== "tab3" ? (
              <img src={reelsIcon} alt="" />
            ) : (
              <img src={reelsSolidIcon} alt="" />
            )}
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            {selectedTab !== "tab4" ? (
              <img src={shopIcon} alt="" />
            ) : (
              <img src={shopSolidIcon} alt="" />
            )}
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab1">
            <div className="h-[25px] w-[25px] rounded-full overflow-hidden">
              <img src={profileImg} alt="" />
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
