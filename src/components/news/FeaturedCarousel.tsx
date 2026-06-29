import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import type { NewsArticle } from "../../types/news";

interface Props {
  articles: NewsArticle[];
}

function FeaturedCarousel({ articles }: Props) {
  return (
    <div className="my-10">

      <h2 className="text-3xl font-bold mb-6">
        🔥 Featured News
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {articles.slice(0, 5).map((article) => (
          <SwiperSlide key={article.id}>
            <div className="relative rounded-3xl overflow-hidden">

              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />

              <div className="absolute inset-0 bg-black/50 flex items-end">

                <div className="p-8 text-white">

                  <h2 className="text-4xl font-bold">
                    {article.title}
                  </h2>

                  <Link
                    to={`/news/${article.id}`}
                    state={article}
                    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
                  >
                    Read Details →
                  </Link>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedCarousel;