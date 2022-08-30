import PostNav from "../components/navigations/PostNav";
import PostStoryTrays from "../components/storyTrays/PostStoryTrays/PostStoryTrays";
import "./Tab1.css";

import PostHeaderImg1 from "../assets/img/post-header-img-1.png";
import PostHeaderImg2 from "../assets/img/post-header-img-2.png";
import PostImg1 from "../assets/img/post-content-img-1.png";
import PostImg2 from "../assets/img/post-content-img-2.png";
import PostImg3 from "../assets/img/post-content-img-3.png";
import {
  IonContent,
  IonButton,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import { useState } from "react";
import Post from "../components/post/Post";

type contents = {
  postAuthorName: string;
  postAuthorProfileImageUrl: string;
  imagesUrl: string[];
  isLiked: boolean;
  isBookMarked: boolean;
  likes: number;
};

type dataType = {
  postType: "normal" | "CTA";
  postContents: contents;
};

const Tab1: React.FC = () => {
  const [data, setData] = useState<dataType[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const pushData = () => {
    const max = data.length + 10;
    const min = max - 10;
    const newData: dataType[] = [
      {
        postType: "CTA",
        postContents: {
          isLiked: false,
          isBookMarked: false,
          likes: 102,
          postAuthorName: "STVgaming",
          imagesUrl: [PostImg1, PostImg3],
          postAuthorProfileImageUrl: PostHeaderImg1,
        },
      },
      {
        postType: "normal",
        postContents: {
          isLiked: false,
          isBookMarked: false,
          likes: 55,
          postAuthorName: "LearnWithUs",
          imagesUrl: [PostImg2],
          postAuthorProfileImageUrl: PostHeaderImg2,
        },
      },
    ];

    setData([...newData]);
  };
  const loadData = (ev: any) => {
    setTimeout(() => {
      pushData();
      console.log("Loaded data");
      ev.target.complete();
      if (data.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  };

  useIonViewWillEnter(() => {
    pushData();
  });
  return (
    <IonPage>
      <PostNav />

      <IonContent fullscreen>
        <>
          <PostStoryTrays />

          <IonList>
            {data.map((item, index) => {
              return (
                <Post
                  key={index}
                  postType={item.postType}
                  postAuthorName={item.postContents.postAuthorName}
                  postAuthorProfileImageUrl={
                    item.postContents.postAuthorProfileImageUrl
                  }
                  imagesUrl={[...item.postContents.imagesUrl]}
                  isLiked={item.postContents.isLiked}
                  isBookMarked={item.postContents.isBookMarked}
                  likes={item.postContents.likes}
                />
              );
            })}
          </IonList>

          <IonInfiniteScroll
            onIonInfinite={loadData}
            threshold="100px"
            disabled={isInfiniteDisabled}
          >
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Loading more data..."
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
