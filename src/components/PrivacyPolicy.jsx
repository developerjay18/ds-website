import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const [hover, setHover] = useState(false);
  return (
    <div className="px-5 lg:px-24 py-16 font-Poppins">
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
            privacy policy
          </h2>
          <div
            className={`liner h-1 w-[20%] bg-mateBlack ${
              hover ? 'bg-profBlue' : 'bg-mateBlack'
            }`}
          ></div>
        </div>
      </div>
      {/* terms and conditions content section */}
      <div className="rounded-lg px-10 text-[#2c2c2c] py-10 my-10 flex flex-col gap-6 bg-[#eeeeee]">
        <p>
          <Link to="/" className="font-semibold text-profBlue">
            Decentsettlement{' '}
          </Link>{' '}
          values your privacy. Our Privacy Policy outlines how we handle your
          information.We collect personal data like your name, email, and phone
          number when you use our services. We use this information to provide
          our services, communicate with you, and offer relevant products. We
          also gather non-personal data for analytics.Your data is secure with
          us, protected by industry-standard measures like SSL encryption.
          However, data transmission security can&apos;t be guaranteed.We may
          share your information with affiliates for security purposes or when
          required by law. Third-party websites linked on our site have their
          own privacy policies.If you have any questions or need to remove a
          testimonial, contact us at{' '}
          <span className="font-semibold text-profBlue">
            decentsettlement@gmail.com
          </span>{' '}
          . Note that our privacy policy may change, so check for updates.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
