"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

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

  return (
    <header className="sticky top-0 p-3 bg-white w-full shadow-sm z-[999]">
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
        <Menu menu_data={nav} />
      </div>
    </header>
  );
}
