import React, { useEffect, useState } from "react";
import Bullet from "./Bullet/Bullet";

export default function BulletsWrapper({
  slidesCount,
  activeSlideIndex,
}: {
  slidesCount: number;
  activeSlideIndex: number;
}) {
  const [bullets, setBullets] = useState<React.ReactElement[]>([]);
  useEffect(() => {
    const bulletsArr: React.ReactElement[] = [];
    for (let i = 0; i < slidesCount; i++) {
      if (i === activeSlideIndex) {
        bulletsArr.push(<Bullet isActive key={i} />);
      } else {
        bulletsArr.push(<Bullet key={i} />);
      }
    }

    setBullets(bulletsArr);
  }, [activeSlideIndex]);

  return (
    <div className="flex-[0.34] gap-[6px] flex justify-center items-center">
      {bullets.length > 1 ? bullets : <></>}
    </div>
  );
}
