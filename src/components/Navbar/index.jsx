import React from "react";
import NavbarItem from "@/components/NavbarItem";

const Navbar = () => {
  return (
    <div
      className={
        "flex dark:bg-secondDark bg-amber-100 p-4 gap-6 justify-center lg:text-lg"
      }
    >
      <NavbarItem title={"Trending"} param={"fetchTrending"} />
      <NavbarItem title={"Top rated"} param={"fetchTopRated"} />
    </div>
  );
};

export default Navbar;
