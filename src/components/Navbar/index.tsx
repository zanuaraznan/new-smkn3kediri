"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const nav = [
    {
      name: "Tentang",
      sub_nav: [
        { name: "Sambutan", path: "/tentang#sambutan" },
        { name: "Sejarah & Visi Misi", path: "/tentang#sejarah" },
        { name: "Struktur Organisasi", path: "/tentang#struktur" },
        { name: "Kompetensi Keahlian", path: "/jurusan" },
        { name: "Ekstrakurikuler", path: "/ekstrakurikuler" },
      ],
    },
    { name: "Galeri", path: "/galeri" },
    { name: "Berita", path: "/berita" },
    {
      name: "Portal Link",
      sub_nav: [
        { name: "SiCantik", path: "http://sicantik.smkn3kdr.my.id" },
        { name: "Jurnal PKL", path: "http://pkl.smkn3kdr.my.id" },
        { name: "Cetak SKL Online", path: "http://skl.smkn3kdr.my.id" },
        { name: "Bursa Kerja Khusus (BKK)", path: "http://bkk.smkn3kdr.my.id" },
        {
          name: "LSP",
          path: "https://sites.google.com/view/lspsmknegeri3kediri",
        },
        {
          name: "Kesiswaan",
          path: "https://sites.google.com/view/divisikesiswaan",
        },
      ],
    },
    { name: "Kontak", path: "/kontak" },
  ];

  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 p-3 bg-white w-full border-b border-b-zinc-200 z-[999]">
      <div className="flex items-center justify-between mx-auto w-[90%] max-w-[68rem]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/smkn3kediri.png"
            width={400}
            height={400}
            className="size-9"
            alt="smkn3kediri"
            title="smkn3kediri"
          />
          <h1 className="font-semibold text-lg">SMKN 3 KEDIRI</h1>
        </Link>

        <nav className="flex items-center gap-8 font-medium">
          {nav.map((el, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownIndex(index)}
              onMouseLeave={() => setDropdownIndex(null)}>
              {el.sub_nav ? (
                <>
                  <button
                    className="flex items-center gap-3 p-3"
                    title={el.name}>
                    {el.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        dropdownIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownIndex === index && (
                    <div className=" absolute left-0 mt-2 bg-white shadow-md shadow-black/5 flex flex-col gap-2 font-normal min-w-max p-4 rounded-md z-50 before:absolute before:left-0 before:cursor-pointer before:-top-6 before:h-6 before:w-full">
                      {el.sub_nav.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.path}
                          className="p-2 px-4 rounded-md transition-all hover:bg-violet-50 hover:text-violet-800 btn-focus"
                          title={sub.name}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={el.path as string}
                  key={index}
                  className="p-2 px-4 rounded-md transition-all hover:bg-violet-50 hover:text-violet-800 btn-focus"
                  title={el.name}>
                  {el.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
