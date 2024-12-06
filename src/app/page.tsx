"use client";

import Landing from "@/components/Landing";
import Toast from "@/components/Toast";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCodeSend, setIsCodeSend] = useState(false);

  useEffect(() => {
    if (!isCodeSend) return;
    const timeout = setTimeout(() => {
      setIsCodeSend(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCodeSend]);

  return (
    <>
      <Landing />
      {isCodeSend && <Toast />}
    </>
  );
}
