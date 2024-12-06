"use client";

import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import Divider from "../Divider";
import Button from "../Button";
import Input from "@/components/Input";

function Landing({ setIsCodeSend }: { setIsCodeSend: any }) {
  const [loginPage, setLoginPage] = useState(false);
  const [otpPage, setOtpPage] = useState(false);
  const [isValidOtp, setIsValidOtp] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [otpValue, setOtpValue] = useState("");
  const [showOtpError, setShowOtpError] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  const [timer, setTimer] = useState(60);
  const [phoneNumber, setPhoneNumber] = useState("");

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
    <div className="flex flex-col items-center w-full max-w-[800px] lg:w-[55%] mt-[135px] p-4">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div
            className="cursor-pointer w-[512px]"
            onClick={() => {
              setLoginPage(false);
              setOtpPage(false);
            }}
          >
            <div>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={114}
                height={63}
              />
            </div>
          </div>
          <div className="w-[514px]">
            <div className="mt-12">
              <div className="flex gap-2 items-center text-3xl font-bold mb-4">
                {!loginPage && !otpPage && (
                  <h1>Welcome to the Command Centre</h1>
                )}
                {loginPage && !otpPage && <h1>Enter your phone number</h1>}
                {otpPage && <h1>Enter the code sent</h1>}
                <span>
                  <Image
                    src="/images/cool-shape.png"
                    alt="logo"
                    width={25}
                    height={25}
                  />
                </span>
              </div>
              {!loginPage && !otpPage && (
                <p className="text-[#585858] text-xl">
                  Login to access and manage the Townverse.
                </p>
              )}
              {loginPage && !otpPage && (
                <p className="text-[#585858] text-xl">
                  Keep your phone closeby to verify.
                </p>
              )}
              {otpPage && (
                <p className="text-[#585858] text-xl">
                  Please check your texts on +91 {phoneNumber}
                </p>
              )}
            </div>
            {loginPage && !otpPage && (
              <>
                <Input
                  type="phone"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value.length <= 10) {
                      setPhoneNumber(e.target.value);
                      setIsValidPhoneNumber(true);
                    }
                    if (e.target.value.length === 10) {
                      setIsValidPhoneNumber(false);
                    }
                  }}
                  isError={showOtpError}
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                />
                <Button
                  label="Continue"
                  onClick={() => setOtpPage(true)}
                  classes="mt-3"
                  disabled={isValidPhoneNumber}
                  variant="secondary"
                />
              </>
            )}
            {otpPage && (
              <>
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
                  placeholder="Enter the 4 ditig code"
                />
                <Button
                  label="Continue"
                  onClick={() => {
                    if (otpValue !== "4467") {
                      console.log("%%%%", otpValue);
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
              </>
            )}
            {!loginPage && !otpPage && (
              <>
                <Button
                  label="Login with Google"
                  src="/images/google.png"
                  onClick={() => {}}
                  classes="mt-10"
                />
                <Divider />
                <Button
                  label="Login with Mobile"
                  src="/images/phone.png"
                  // onClick={() => {
                  //   setLoginPage(true);
                  // }}
                  route="/mobile-login"
                />
                <Button
                  label="Login with Email"
                  src="/images/mail.png"
                  onClick={() => {}}
                  classes="mt-3"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
