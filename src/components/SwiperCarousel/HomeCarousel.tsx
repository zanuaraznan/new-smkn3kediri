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
    <div className="relative group swiper-group w-full h-full">
      <div className="px-3 invisible opacity-0 transition-all flex group-hover:opacity-100 group-hover:visible justify-between absolute z-10 w-full top-1/2 -translate-y-1/2">
        <button className="prev-el p-3 rounded-full bg-white/75 backdrop-blur hover:bg-white">
          <ChevronLeft size={22} />
        </button>
        <button className="next-el p-3 rounded-full bg-white/75 backdrop-blur hover:bg-white">
          <ChevronRight size={22} />
        </button>
      </div>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        className="w-full h-full flex flex-col"
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        speed={2000}
        loop={true}
        navigation={{ nextEl: ".next-el", prevEl: ".prev-el" }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={`/carousel/${slide.image}`}
              width={400}
              height={400}
              alt={slide.title}
              title={slide.title}
              className="w-full h-full aspect-square object-cover rounded-lg"
            />
            <div className="image-swiper absolute inset-0"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
