"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeCarousel() {
  const slides = [
    {
      image: "1.png",
      title: "Sosialisasi sebelum PKL",
    },
    {
      image: "2.png",
      title: "Praktik pembelajaran DKV",
    },
    {
      image: "3.png",
      title: "Praktik pembelajaran Kuliner",
    },
    {
      image: "4.png",
      title: "Pemberian Penghargaan Juara",
    },
  ];
  return (
    <>
      <button className="prev-el p-2 rounded-full bg-white invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible absolute z-10 top-1/2 left-6 -translate-y-1/2">
        <ChevronLeft size={20} />
      </button>
      <button className="next-el p-2 rounded-full bg-white invisible opacity-0 transition-all group-hover:opacity-100 group-hover:visible absolute z-10 top-1/2 right-6 -translate-y-1/2">
        <ChevronRight size={20} />
      </button>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="aspect-[9/8] cursor-grab overflow-hidden rounded-2xl"
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
          renderBullet: function (index, className) {
            return `<button class="${className} custom-bullet"></button>`;
          },
        }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        loop={true}
        navigation={{ nextEl: ".next-el", prevEl: ".prev-el" }}>
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative aspect-[9/8] bg-inherit text-center">
            <figure className="absolute inset-0 w-full">
              <Image
                src={`/carousel/${slide.image}`}
                width={400}
                height={400}
                alt={slide.title}
                title={slide.title}
                className="w-full h-full object-cover"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-2 flex justify-center gap-2 static"></div>
    </>
  );
}
