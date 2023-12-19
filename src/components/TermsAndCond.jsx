import React, { useState } from 'react';
import { Footer2 } from '.';

function TermsAndCond() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="px-5 lg:px-24 py-16 font-Poppins pt-[12rem]">
        {/* heading section */}
        <div className="px-20 flex flex-col gap-8 text-white">
          <div
            className="text-4xl font-bold flex flex-col justify-center items-center gap-4 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <h2
              className={`${
                hover ? 'text-profBlue' : 'text-mateBlack'
              } capitalize`}
            >
              terms and conditions
            </h2>
            <div
              className={`liner h-1 w-[30%] bg-mateBlack ${
                hover ? 'bg-profBlue' : 'bg-mateBlack'
              }`}
            ></div>
          </div>
        </div>
        {/* terms and conditions content section */}
        <div className="rounded-lg px-10 text-[#2c2c2c] py-10 my-10 flex flex-col gap-6 bg-[#eeeeee]">
          <p>Please read the following T & C carefully</p>
          <p>
            These terms and conditions (“Terms and Conditions”) control your use
            of this website decentsettlement.com (“Website”). In these Terms and
            Conditions, “Decent settlement” is referred to as the “Company”,
            “us,” or “we.”
          </p>
          <p>
            If you use this website or its products and services, you&apos;re
            agreeing to follow these rules. You can find the company&apos;s
            privacy policy at Privacy Policy. If you don&apos;t agree to these
            rules, you can&apos;t use any part of the company&apos;s website or
            its products and services.
          </p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">
              Follow the website rules and respect privacy:
            </span>
            <p>
              The company isn&apos;t responsible for errors or
              damages.You&apos;re responsible for your hardware and internet
              fees.Use login credentials and follow the rules.We aim for
              uninterrupted service but can&apos;t guarantee it. Don&apos;t be
              rude or share harmful content.No hacking or spamming
              allowed.Don&apos;t copy or violate laws with content.We&apos;re
              not liable for damages or losses.You must indemnify us if you
              breach the terms. Some services have fees; you&apos;ll be
              notified.Refunds depend on the service agreement.Service fees are
              non-refundable after cancellation.
            </p>
          </div>
          <p>
            For any other information, you can write to us at
            <b className="text-profBlue"> decentsettlement@gmail.com</b> and
            keep in mind clearly in case any dispute arises, The place of
            jurisdiction will be at Ahmedabad city only.
          </p>
        </div>
      </div>
      {/* footer sec */}
      <Footer2 />
    </>
  );
}

export default TermsAndCond;
