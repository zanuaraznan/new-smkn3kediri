import HomeCarousel from "@/components/SwiperCarousel/HomeCarousel";
import { GraduationCap, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex w-full aspect-video">
      <div
        className="inset-0 absolute select-none -z-10"
        style={{
          backgroundImage: "url('/BG-particle.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      <div className="flex-1 h-full flex justify-center flex-col gap-6">
        <h1 className="flex flex-col w-[80%] text-xl font-medium gap-3">
          Selamat Datang di
          <span className="text-7xl font-semibold">
            SMK NEGERI 3 KOTA KEDIRI
          </span>
          <span className="text-zinc-700 text-base font-normal w-[80%]">
            Alamat: Jl. Hasanudin No. 10, Dandangan, Kec. Kota, Kota Kediri,
            Jawa Timur 64121
          </span>
        </h1>
        <div className="flex gap-4">
          <Link
            href="/profil"
            className="p-3 -x-4 w-fit transition-all rounded-lg bg-violet-800 hover:bg-violet-900 active:bg-violet-700 text-white flex gap-3 text-nowrap items-center">
            <GraduationCap size={22} />
            Jelajah profil sekolah
          </Link>
          <Link
            href="/profil"
            className="btn-focus p-3 -x-4 w-fit transition-all rounded-lg ring-2 ring-zinc-300 hover:bg-zinc-200 flex gap-3 text-nowrap items-center">
            <Newspaper size={22} />
            Berita terbaru
          </Link>
        </div>
      </div>
      <div className="relative flex-1 h-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 p-6"
          style={{
            backgroundImage: "url('/circle.png')",
            backgroundSize: "120%",
            backgroundPosition: "center",
          }}>
          <svg
            width="1244"
            height="1244"
            viewBox="0 0 1244 1244"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-80"
            preserveAspectRatio="xMidYMid meet">
            <circle
              cx="622"
              cy="622"
              r="619"
              stroke="#9fd6b4"
              strokeWidth="3"
              strokeDasharray="24 24">
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="60s"
                type="rotate"
                from="0 622 622"
                to="360 622 622"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
        <div className="w-[60%] rounded-2xl bg-white p-3 overflow-hidden animate-floating">
          <HomeCarousel />
        </div>
        <Link
          href="https://youtu.be/18nW7mq8xHg"
          target="_blank"
          title="Youtube"
          className="absolute rounded-full p-4 px-6 bg-white shadow-xl shadow-zinc-800/10 gap-3 left-4 top-36 hover:ring-4 hover:ring-violet-200 hover:bg-violet-50 transition-all">
          <div className=" flex items-center gap-4">
            <div className="p-3 rounded-full bg-emerald-50 size-16">
              <Image src="/smkn3kediri.png" width={400} height={400} alt="" />
            </div>
            <div className="font-medium">
              Profil SMK Pusat Keunggulan
              <p className="font-normal opacity-75">SMK Negeri 3 Kota Kediri</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
