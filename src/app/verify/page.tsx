"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LoginHeader from "@/components/LoginHeader";
import { OTP_TITLE, OTP_MESSAGE, OTP_PLACEHOLDER } from "@/constants";

function Landing({
  setIsCodeSend,
}: {
  setIsCodeSend: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isValidOtp, setIsValidOtp] = useState(true);
  const [otpValue, setOtpValue] = useState("");
  const [showOtpError, setShowOtpError] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  const [timer, setTimer] = useState(60);

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

  return (
    <div className="w-full max-w-[800px] lg:w-[55%] mt-[135px] p-4">
      <div className="flex flex-col items-center">
        <LoginHeader title={OTP_TITLE} message={OTP_MESSAGE("0000000000")} />
        <div className="w-[514px]">
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setShowOtpError(false);
              setOtpValue(e.target.value);
              if (e.target.value.length === 4) {
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
  );
}

export default Landing;
