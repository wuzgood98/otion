"use client";

import { useEffect, useState } from "react";

import { CoverImageModal } from "@/components/modal/cover-image-modal";
import { SettingsModal } from "@/components/modal/settings-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
}
