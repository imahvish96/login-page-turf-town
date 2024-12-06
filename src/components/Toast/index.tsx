import React from "react";

export default function Toast() {
  return (
    <div className="flex gap-5 items-center bg-[#222222] shadow-md w-[197px] h-[52px] rounded-[70px] text-white px-6 py-3 absolute bottom-10 right-[45%] slideUp">
      <div className="w-[28px] h-[28px] rounded-full bg-[#414141] flex justify-center items-center text-[14px]">
        <span className="icon-Vector"></span>
      </div>
      <span className="font-bold">Code Sent</span>
    </div>
  );
}
