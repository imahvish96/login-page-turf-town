"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LoginHeader from "@/components/LoginHeader";
import { OTP_TITLE, OTP_MESSAGE, OTP_PLACEHOLDER } from "@/constants";
import Toast from "@/components/Toast";

export default function Verify() {
  const [isValidOtp, setIsValidOtp] = useState(true);
  const [otpValue, setOtpValue] = useState("");
  const [showOtpError, setShowOtpError] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  const [timer, setTimer] = useState(60);
  const router = useSearchParams();
  const [isCodeSend, setIsCodeSend] = useState<boolean>(false);

  const phoneNumber = router.get("data");

  useEffect(() => {
    if (timer === 0) {
      setTimerStart(false);
    }
    let interval = undefined;
    if (timerStart && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerStart, timer]);

  useEffect(() => {
    if (!isCodeSend) return;
    const timeout = setTimeout(() => {
      setIsCodeSend(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCodeSend]);

  return (
    <>
      <div className="w-full max-w-[800px] lg:w-[55%] mt-[135px] p-4">
        <div className="flex flex-col items-center">
          <LoginHeader
            title={OTP_TITLE}
            message={OTP_MESSAGE(phoneNumber as string)}
          />
          <div className="w-[514px]">
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.replace(/\s/g, "");
                if (e.target.value.length <= 6) {
                  const formattedValue = value.split("").join(" ");
                  setOtpValue(formattedValue);
                  setShowOtpError(false);
                  setIsValidOtp(true);
                }
                if (e.target.value.length === 6) {
                  setIsValidOtp(false);
                }
              }}
              isError={showOtpError}
              type="otp"
              value={otpValue}
              placeholder={OTP_PLACEHOLDER}
            />
            <Button
              label="Continue"
              onClick={() => {
                if (otpValue !== "4467") {
                  setShowOtpError(true);
                }
              }}
              classes="mt-3"
              disabled={isValidOtp}
              variant="secondary"
            />

            <div className="mt-12">
              <div>
                <span className="text-black font-bold">Didn’t get it?</span>{" "}
                <span
                  className={`${
                    timerStart
                      ? "text-[#888888]"
                      : "text-[#305DF0] underline cursor-pointer"
                  }  font-bold `}
                  onClick={() => {
                    setIsCodeSend(true);
                    setTimerStart(true);
                  }}
                >
                  {timerStart
                    ? `Resend in 00:${timer > 9 ? timer : `0${timer}`}`
                    : "Resend Code"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCodeSend && <Toast />}
    </>
  );
}
