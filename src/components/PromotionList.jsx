import React, { useEffect, useState } from "react";
import { PromotionCard } from "./PromotionCard";
import { useNavigate } from "react-router-dom";
import { ROUTING_PROMOTIONLIST } from "../router/path";

const PromotionList = ({ promotions = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(4);

  useEffect(() => {
    const updateGroupSize = () => {
      setGroupSize(window.innerWidth < 768 ? 1 : 4);
      setCurrentIndex(0);
    };

    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);

    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  const groupPromotions = (items, groupSize) => {
    const result = [];
    for (let i = 0; i < items.length; i += groupSize) {
      result.push(items.slice(i, i + groupSize));
    }
    return result;
  };

  const promotionGroups = groupPromotions(promotions, groupSize);
  const groupCount = promotionGroups.length || 1;
  const navigate = useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : promotionGroups.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < promotionGroups.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleSeeMore = () => {
    navigate(ROUTING_PROMOTIONLIST);
  };

  return (
    <div className="bg-transparent py-8">
      <div className="mb-6 text-center text-xl font-bold text-white md:text-2xl">
        KHUYẾN MÃI
      </div>
      <div className="relative mb-6 flex items-center justify-center gap-2 md:gap-0">
        <button
          onClick={handlePrev}
          className="left-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 p-2 text-white transition hover:bg-gray-700 md:h-auto md:w-auto"
        >
          {"<"}
        </button>

        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / groupCount)}%)`,
              width: `${groupCount * 100}%`,
            }}
          >
            {promotionGroups.map((group, index) => (
              <div
                key={index}
                className="grid w-full grid-cols-1 justify-items-center gap-4 px-1 md:mx-2 md:flex md:justify-center md:gap-0 md:px-0"
              >
                {group.map((promotion, idx) => (
                  <div key={promotion.id || idx} className="w-full max-w-[300px] md:mx-6 md:max-w-none">
                    <PromotionCard promotion={promotion} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="right-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 p-2 text-white transition hover:bg-gray-700 md:h-auto md:w-auto"
        >
          {">"}
        </button>
      </div>

      <div className="text-center mt-8">
        <button
          className="w-[200px] bg-[#9CB2F5] text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition"
          onClick={handleSeeMore}
        >
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export { PromotionList };
