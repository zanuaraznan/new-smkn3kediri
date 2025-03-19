"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";

export default function HomeAlert() {
  const { isOpen, isAnimate, modalRef, closeRef, handleClose } = useModal();
  if (!isOpen) return null;
  return (
    <div
      className={`inset-0 select-none fixed bg-black/25 flex justify-center items-center z-[9999] transition-all ease-out ${
        isAnimate ? "opacity-100 backdrop-blur" : "opacity-0"
      }`}>
      <div
        ref={modalRef}
        className={`w-[35vw] bg-white p-6 px-8 rounded-2xl flex flex-col gap-4 transition-all ease-out ${
          isAnimate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}>
        <div className="font-medium text-xl flex items-center justify-between">
          Pendaftaran PPDB SMA/SMK Jawa Timur 2025
          <button
            onClick={handleClose}
            ref={closeRef}
            className="focus:outline-none focus:ring-4 focus:ring-slate-300 p-3 rounded-md">
            <X size={22} />
          </button>
        </div>
        <p className="text-justify">
          Penerimaan Peserta Didik Baru (PPDB) Jawa Timur 2025 akan segera
          dibuka! Seluruh proses pendaftaran dilakukan secara online melalui
          website resmi{" "}
          <Link
            href="https://www.ppdbjatim2025.com"
            className="hover:underline text-indigo-400 font-medium">
            PPDB Jatim 2025
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
