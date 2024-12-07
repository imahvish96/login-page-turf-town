"use client";

import React, { ChangeEvent, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LoginHeader from "@/components/LoginHeader";
import {
  PHONE_NUMBER_TITLE,
  PHONE_NUMBER_MESSAGE,
  MOBILE_NUMBER_PLACEHOLDER,
} from "@/constants";
import { useRouter } from "next/navigation";

function Welcome() {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col items-center w-full max-w-[800px] lg:w-[55%] mt-[135px] p-4">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <LoginHeader
            title={PHONE_NUMBER_TITLE}
            message={PHONE_NUMBER_MESSAGE}
          />
          <div className="w-[514px]">
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
              placeholder={MOBILE_NUMBER_PLACEHOLDER}
              value={phoneNumber}
            />

            <Button
              label="Continue"
              classes="mt-3"
              disabled={isValidPhoneNumber}
              variant="secondary"
              route={`/verify?data=${phoneNumber}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
