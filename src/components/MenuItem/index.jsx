import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className={
        "rounded-full hover:bg-secondLight dark:hover:bg-thirdDark md:dark:hover:bg-dark p-2 md:hover:bg-white  md:hover:text-amber-500"
      }
    >
      <Icon className={"text-2xl sm:hidden"} />
      <p className={"uppercase hidden sm:inline text-sm"}>{title}</p>
    </Link>
  );
};

export default MenuItem;
