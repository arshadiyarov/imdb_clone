"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { Context } from "@/components/Header";

import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const [searchToggle] = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form
      className={`${!searchToggle ? "absolute right-16 flex" : "hidden w-full md:flex "} items-center justify-between gap-2 border-secondText dark:bg-dark dark:border-thirdDark border pl-4 rounded-full`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder={"Search"}
        className={
          "outline-0 w-full dark:bg-dark placeholder:text-sm placeholder:text-secondText font-medium text-sm"
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type={"submit"}
        className={
          "text-2xl bg-secondLight px-5 py-1.5 dark:bg-secondDark dark:border-thirdDark border-l border-secondText rounded-r-full"
        }
      >
        <IoIosSearch />
      </button>
    </form>
  );
};

export default SearchBox;
