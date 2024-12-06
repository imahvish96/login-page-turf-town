import { INCORRECT_OTP } from "@/constants";
import Image from "next/image";
import React, { ChangeEvent } from "react";

function Input({
  type,
  isError = false,
  onChange,
  placeholder,
  value,
}: {
  type?: "phone" | "otp";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  placeholder?: string;
  value: string;
}) {
  return (
    <div
      className={`flex items-center rounded-lg mt-10 ${
        type === "phone" ? "w-full" : "w-[476px]"
      }`}
    >
      {type === "phone" && (
        <div className="flex items-center bg-white border border-[#D6D6D6] rounded-lg p-2 shadow-md h-[56px] w-[135px]">
          <div className="w-6/12 flex justify-center border-r-2 border-[#D6D6D6]">
            <Image
              src="/images/india.png"
              alt="India"
              className="w-6 h-4 rounded-sm"
              width={100}
              height={100}
            />
          </div>
          <div className="text-gray-600 font-medium w-6/12 text-center">
            + 91
          </div>
        </div>
      )}
      {type !== "otp" && (
        <input
          type="number"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`flex-1 border-2 outline-none rounded-lg shadow-md p-2 px-5 h-[56px]  ${
            type ? "ml-4 w-full max-w-[324px]" : "w-[476px]"
          } ${
            isError
              ? "bg-[#FFF7F7] border-[#FDBFBF]"
              : "bg-white border-[#D6D6D6] placeholder-gray-400 text-gray-700 focus:ring-2 focus:ring-[#9AB2FF] hover:shadow-lg transition duration-300 ease-in-out"
          }`}
        />
      )}

      {type === "otp" && (
        <div
          className={`flex justify-between items-center flex-1 border-2 outline-none rounded-lg shadow-md p-2 px-5 h-[56px] w-[476px]  ${
            isError
              ? "bg-[#FFF7F7] border-[#FDBFBF]"
              : "bg-white border-[#D6D6D6] placeholder-gray-400 text-gray-700 focus-within:ring-2 focus-within:ring-[#9AB2FF] hover:shadow-lg transition duration-300 ease-in-out"
          }`}
        >
          <input
            type="number"
            placeholder={placeholder}
            className="h-[36px] outline-none bg-transparent"
            onChange={onChange}
          />
          {isError && <span className="text-[#FF6868]">{INCORRECT_OTP}</span>}
        </div>
      )}
    </div>
  );
}

export default Input;
