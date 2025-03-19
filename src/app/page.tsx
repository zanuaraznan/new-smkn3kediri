import HomeAlert from "@/components/Alert/HomeAlert";
import HomeCarousel from "@/components/SwiperCarousel/HomeCarousel";
import { GraduationCap, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <HomeAlert />
      <section className="relative overflow-hidden bg-cover bg-no-repeat min-h-[calc(100vh-64px)] flex">
        <div className="max-w-5xl mx-auto w-[90%] flex flex-col-reverse justify-between gap-8 md:flex-row">
          <div className="flex w-full flex-col justify-center md:w-[calc(100%/7*5)]">
            <div className="space-y-3">
              <h2 className="text-xl">Selamat Datang di</h2>
              <h1 className="text-4xl font-semibold">
                SMK NEGERI 3 KOTA KEDIRI
              </h1>
              <h2 className="text-xl">
                Alamat: Jl. Hasanudin No. 10, Dandangan, Kec. Kota, Kota Kediri,
                Jawa Timur 64121
              </h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/jurusan"
                className="inline-flex gap-3 text-nowrap items-center justify-center  shadow-sm p-3 w-fit rounded-lg border border-violet-500 bg-violet-800 hover:bg-violet-900 active:bg-violet-800 text-white disabled:bg-violet-400 disabled:cursor-not-allowed btn-focus">
                <GraduationCap size={22} />
                Kompetensi Keahlian
              </Link>
              <Link
                href="/ekstrakurikuler"
                className="inline-flex gap-3 text-nowrap items-center justify-center shadow-sm p-3 w-fit rounded-lg border border-gray-300 hover:bg-gray-200 disabled:cursor-not-allowed btn-focus">
                <Newspaper size={22} />
                Ekstrakurikuler
              </Link>
            </div>
          </div>
          <div className="relative flex h-full w-full items-center @container">
            <div className="relative z-10 flex w-full justify-center">
              <div className="group max-w-sm w-[80%] rounded-3xl bg-white p-2 animate-floating">
                <HomeCarousel />
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 flex z-0"
              style={{
                backgroundImage: "url('/circle.png')",
                backgroundSize: "125%",
                backgroundPosition: "center",
              }}>
              <figure className="absolute inset-0 z-0 w-full">
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
                    stroke="#9fbdaa"
                    strokeWidth="3"
                    strokeDasharray="5 10"></circle>
                </svg>
              </figure>
            </div>
            {/* <Link
              href="https://youtu.be/18nW7mq8xHg"
              target="_blank"
              title="Youtube"
              className="absolute rounded-full p-4 px-6 bg-white shadow-2xl shadow-zinc-800/20 gap-3 left-4 top-24 hover:ring-4 hover:ring-violet-200 hover:bg-violet-50 transition-all">
              <div className=" flex items-center gap-4">
                <div className="p-3 rounded-full bg-emerald-50 size-16">
                  <Image
                    src="/smkn3kediri.png"
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
                <div className="font-medium">
                  Profil SMK Pusat Keunggulan
                  <p className="font-normal opacity-75">
                    SMK Negeri 3 Kota Kediri
                  </p>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
