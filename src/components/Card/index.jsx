import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiThumbsUp } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Card = ({ result }) => {
  return (
    <div className={"group cursor-pointer sm:m-2"}>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          className={
            "sm:rounded-xl group-hover:rounded-none transition-all duration-300"
          }
          alt={result.title}
        />
        <div className={"flex items-center gap-2 px-3 pb-9 pt-2"}>
          <img
            src="https://yt3.ggpht.com/weD7WfgxB3sjFX7Yr4RBk3oAYKYLT4yjb9N3yK10VwF1Pmusidh7xqk1tAP23QpW1rur2Gst0s4=s176-c-k-c0x00ffffff-no-rj-mo"
            alt="round"
            width={40}
            height={40}
            className={"rounded-full mr-1"}
          />
          <div>
            <h2 className={"text-sm truncate md:text-md"}>
              {result.title || result.name}
            </h2>
            <p className={"text-xs text-secondText flex items-center"}>
              {result.media_type || "Top"}
              <LuDot className={"text-lg"} />
              <FiThumbsUp className={"h-5 mr-1"} />
              {result.vote_count}
              <LuDot className={"text-lg"} />
              {result.release_date || result.first_air_date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
