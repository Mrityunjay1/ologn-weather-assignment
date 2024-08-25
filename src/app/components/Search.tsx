"use client";

import { Mic, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleRedirect = () => {
    if (search) {
      router.push(`/weather-details/${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          className="w-full border border-slate-500 rounded-full pl-12 pr-4 py-4"
          placeholder="Enter locality ID"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="absolute left-4 top-4" />
        <Mic className="absolute right-4 top-4" />
      </div>

      <div className="flex items-center justify-center mt-4 mb-6">
        {search && (
          <button
            onClick={handleRedirect}
            className="bg-red-500 text-white px-4 py-2 rounded-full"
          >
            View Weather Details
          </button>
        )}
      </div>
      <p className="text-center">
        Locality ID Reference:{" "}
        <Link
          className="text-red-500"
          href="https://b.zmtcdn.com/data/file_assets/65fa362da3aa560a92f0b8aeec0dfda31713163042.pdf"
        >
          Click Here
        </Link>
      </p>
    </div>
  );
};

export default Search;
