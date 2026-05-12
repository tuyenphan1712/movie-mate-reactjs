import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";
import { PromotionCard } from "../components/PromotionCard";

const PromotionList = () => {
    const { movies } = useMovies();
    const promotions = movies.promotions || []; // Lấy dữ liệu khuyến mãi từ context

    const [visiblePromotions, setVisiblePromotions] = useState(4); // Số lượng khuyến mãi hiển thị ban đầu

    // Xử lý sự kiện khi nhấn nút "Xem thêm"
    const handleSeeMore = () => {
        setVisiblePromotions(visiblePromotions + 2); // Mỗi lần nhấn "Xem thêm" sẽ thêm 2 khuyến mãi
    };

    return (
        <div className="bg-[#151515] min-h-screen flex flex-col">
            <div className="container w-[90%] mx-auto px-8 py-4 flex-1">
                {/* Tiêu đề trang */}
                <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
                    <h2 className="text-white text-2xl font-bold">
                        DANH SÁCH KHUYẾN MÃI
                    </h2>
                </div>

                {/* Danh sách khuyến mãi */}
                {promotions.slice(0, visiblePromotions).map((promotion) => (
                    <div key={promotion.id} className="mb-8 justify-items-center">
                        <div className="flex flex-row items-center w-full">
                            {/* Ảnh bên trái */}
                            <div className="flex-1 w-3/4 h-[350px] ms-16">
                                {/* Sử dụng component PromotionCard để hiển thị ảnh */}
                                <PromotionCard promotion={promotion} />
                            </div>

                            {/* Mô tả chi tiết bên phải */}
                            <div className="flex-1 w-full h-[350px] me-16">
                                <div className="bg-[#2A2A2A] h-full p-6 rounded-lg text-white mx-6">
                                    <h2 className="text-yellow-400 text-2xl font-bold mb-6">
                                        {promotion.title}
                                    </h2>
                                    <p className="text-lg mb-6 text-left">{promotion.description}</p>
                                    <div className="text-lg text-left">
                                        <p className="font-bold">Thời gian áp dụng:</p>
                                        <p>{promotion.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Nút "Xem thêm" */}
                {visiblePromotions < promotions.length && (
                    <div className="flex justify-center items-center mb-8">
                        <button
                            onClick={handleSeeMore}
                            className="w-[200px] bg-blue-500 text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition"
                        >
                            Xem thêm
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


export { PromotionList };
