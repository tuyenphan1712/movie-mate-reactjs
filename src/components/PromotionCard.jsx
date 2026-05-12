import React from "react";

const PromotionCard = ({ promotion }) => {
  return (
    <div className="h-full w-full flex-shrink-0 px-0 md:px-4">
      <img
        src={promotion.image}
        alt={promotion.title}
        className="h-auto w-full rounded-lg object-cover md:h-full"
      />
    </div>
  );
};

export { PromotionCard };
