import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import StoryImg1 from "../../../assets/img/story-img-1.png";
import StoryImg2 from "../../../assets/img/story-img-2.png";
import StoryImg3 from "../../../assets/img/story-img-3.png";
import StoryImg4 from "../../../assets/img/story-img-4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./PostStoryTrays.scss";
export default function PostStoryTrays() {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={4}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="max-w-full px-2 py-[10px]"
    >
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="post-story">
            <div className="bg-white w-[60px] h-[60px] rounded-full p-1">
              <img src={StoryImg1} alt="" />
            </div>
          </div>
          <p className="font-normal text-[11.5px] leading-[22px] text-center">
            Your Story
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="post-story">
            <div className="bg-white w-[60px] h-[60px] rounded-full p-1">
              <img src={StoryImg2} alt="" />
            </div>
          </div>
          <p className="font-normal text-[11.5px] leading-[22px] text-center">
            HypeSun_98
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="post-story">
            <div className="bg-white w-[60px] h-[60px] rounded-full p-1">
              <img src={StoryImg3} alt="" />
            </div>
          </div>
          <p className="font-normal text-[11.5px] leading-[22px] text-center">
            KarolBary
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="post-story">
            <div className="bg-white w-[60px] h-[60px] rounded-full p-1">
              <img src={StoryImg4} alt="" />
            </div>
          </div>
          <p className="font-normal text-[11.5px] leading-[22px] text-center">
            Waggles
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
