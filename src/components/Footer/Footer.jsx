import React from "react";

const Footer = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="my-4 text-2xl font-bold">G@dget Heav3n</h1>
        <p className="text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <ul className="flex flex-col items-center justify-center gap-4 font-bold lg:flex-row">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/statistics">Statistics</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
