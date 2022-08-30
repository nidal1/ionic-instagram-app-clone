import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export default function PostContent({
  imagesUrl,
  setSlidesCount,
  setActiveSlideIndex,
}: {
  imagesUrl: string[];
  setSlidesCount: React.Dispatch<React.SetStateAction<number>>;
  setActiveSlideIndex: (value: React.SetStateAction<number>) => void;
}) {
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentActiveSlideIndex, setCurrentActiveSlideIndex] = useState(0);
  return (
    <div className="w-full relative">
      {totalSlides > 1 && (
        <div className="absolute top-[10px] right-[15px] w-fit py-[8px] px-[10px] rounded-l-[50px] rounded-r-[50px] bg-black opacity-80 z-10 ">
          <p className="text-white text-[10px] mix-blend-normal">
            {currentActiveSlideIndex + 1}/{totalSlides}
          </p>
        </div>
      )}

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoHeight={true}
        onSwiper={(swiper) => {
          setTotalSlides(swiper.slides.length);
          setSlidesCount(swiper.slides.length);
        }}
        onSlideChange={(swiper) => {
          setCurrentActiveSlideIndex(() => {
            setActiveSlideIndex(swiper?.activeIndex);
            return swiper?.activeIndex;
          });
        }}
        className="max-w-full"
      >
        {imagesUrl.map((imageUrl, i) => (
          <SwiperSlide key={i}>
            <img src={imageUrl} alt="" className="min-w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
