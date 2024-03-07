"use client";

import React, { createContext, useState } from "react";
import Link from "next/link";

import MenuItem from "@/components/MenuItem";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBox from "@/components/SearchBox";

import { LiaHomeSolid } from "react-icons/lia";
import { LuInfo } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

export const Context = createContext();
const Header = () => {
  const [searchToggle, setSearchToggle] = useState(true);

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <Context.Provider value={[searchToggle, handleSearchToggle]}>
      <div
        className={
          "flex justify-between items-center p-3 max-w-6xl mx-auto gap-4 relative"
        }
      >
        <div className={"flex items-center gap-4"}>
          <Link
            href={"/"}
            className={`${!searchToggle && "hidden"} flex gap-1 items-center`}
          >
            <span className={"text2l font-bold bg-amber-500 py-1 px-2 rounded"}>
              IMDb
            </span>
            <span className={"text-xl hidden sm:inline"}>Clone</span>
          </Link>
          {!searchToggle && (
            <button className={"pl-2 text-xl"}>
              <FaArrowLeftLong onClick={() => setSearchToggle(true)} />
            </button>
          )}
        </div>
        <SearchBox />
        <div className={"flex gap-1 items-center"}>
          <button
            className={`${!searchToggle && "hidden"} rounded-full hover:bg-secondLight dark:hover:bg-thirdDark p-2 md:hidden text-2xl`}
          >
            <IoIosSearch onClick={handleSearchToggle} />
          </button>
          <MenuItem title={"Home"} address={"/"} Icon={LiaHomeSolid} />
          <MenuItem title={"About"} address={"/about"} Icon={LuInfo} />
          <ThemeToggle />
        </div>
      </div>
    </Context.Provider>
  );
};

export default Header;
