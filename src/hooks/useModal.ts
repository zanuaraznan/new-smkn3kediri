import { useState, useEffect, useRef } from "react";

export function useModal() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isAnimate, setAnimate] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(true);
    setTimeout(() => setAnimate(true), 100);
  }, []);

  function handleClose() {
    setAnimate(false);
    setTimeout(() => setOpen(false), 300);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        modalRef.current &&
        e.target instanceof Node &&
        !modalRef.current.contains(e.target)
      ) {
        handleClose();
      }
    }

    if (isOpen) closeRef.current?.focus();

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    isAnimate,
    modalRef,
    closeRef,
    handleClose,
    setOpen,
  };
}
