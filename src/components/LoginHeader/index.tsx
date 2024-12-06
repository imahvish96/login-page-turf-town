import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  message: string;
};

const LoginHeader = ({ title, message }: Props) => {
  return (
    <div className="cursor-pointer w-[512px]">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={114} height={63} />
      </Link>
      <div className="mt-12">
        <div className="flex gap-2 items-center text-3xl font-bold mb-4">
          <h1>{title}</h1>
          <span>
            <Image
              src="/images/cool-shape.png"
              alt="logo"
              width={25}
              height={25}
            />
          </span>
        </div>

        <p className="text-[#585858] text-xl">{message}</p>
      </div>
    </div>
  );
};

export default LoginHeader;
