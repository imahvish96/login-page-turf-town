import Image from "next/image";
import React from "react";
import Button from "../Button";
import PhoneInput from "../Input";
import Link from "next/link";

type Props = {};

function MobileLogin({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[800px] lg:w-[55%]  p-4">
      <div className="w-full">
        <Image src="/images/logo.png" alt="logo" width={114} height={63} />
        <div>
          <div className="mt-12">
            <div className="flex gap-2 items-center text-3xl font-bold mb-4">
              <h1>Welcome to the Command Centre</h1>
              <span>
                <Image
                  src="/images/cool-shape.png"
                  alt="logo"
                  width={25}
                  height={25}
                />
              </span>
            </div>
            <p className="text-[#585858] text-xl">
              Login to access and manage the Townverse.
            </p>
          </div>
          <PhoneInput type="phone" />

          <Button
            label="Continue"
            onClick={() => {}}
            classes="mt-3"
            route="/verify"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileLogin;
