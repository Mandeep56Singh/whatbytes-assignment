import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <div className="flex p-4 gap-2 items-center">
      <Image src={"/logo.png"} alt="logo" width={28} height={12} />

      <h1 className="text-2xl font-medium"> WhatBytes</h1>
    </div>
  );
};

export default Header;
