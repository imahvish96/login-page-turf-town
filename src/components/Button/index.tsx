import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  icon?: string;
  src?: string;
  classes?: string;
  route?: string;
  disabled?: boolean;
  variant?: string;
};

function Button({
  label,
  src,
  classes,
  disabled,
  route = "",
  variant,
  onClick,
}: Props) {
  return (
    <Link href={route}>
      <button
        type="button"
        className={`w-[476px] h-[56px] flex justify-center items-center  rounded-lg text-sm px-4 py-2.5 text-center font-bold me-2 mb-2  ${classes} ${
          disabled
            ? "bg-[#dddddd] text-[#A4A4A4] hover:bg-[#dddddd] border-[#D0D0D0] active:bg-[#dddddd] shadow-none cursor-not-allowed"
            : variant === "secondary"
            ? "bg-[#5D7CE3] hover:bg-[#5878e2] active:bg-[#496bdc] text-white"
            : "text-gray-900 border border-[#D6D6D6] bg-white hover:bg-gray-50 focus:outline-none focus:ring-gray-100 shadow-md active:bg-gray-100"
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className={`flex gap-2 ${src ? "w-[173px]" : ""}`}>
          {src && (
            <div className="w-5 h-5 flex justify-center items-center">
              <Image
                src={src}
                alt="logo"
                width={100}
                height={100}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          )}
          <span className="mr-5">{label}</span>
        </div>
      </button>
    </Link>
  );
}

export default Button;
