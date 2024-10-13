"use client";

import { useEffect, useState } from "react";
import WebtoonCard from "./WebtoonCard";
import axios from "axios";
import { Webtoon } from "@/types/webtoon";

const WebtoonList = () => {
  const [toonList, setToonList] = useState<Webtoon[] | []>([]);

  useEffect(() => {
    try {
      const webtoonList = async () => {
        const response = await axios.get("/api/top-5-webtoons");
        const data = response.data;

        setToonList(data);
      };

      webtoonList();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleVote = async (id: string, type: "manhwa" | "anime") => {
    try {
      const response = await axios.post(`/api/vote/${id}`, {
        type,
      });

      const data = response.data;

      setToonList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-5 my-10">
      {toonList.length > 0 ? (
        toonList.map((toon) => (
          <WebtoonCard key={toon._id} {...toon} onVote={handleVote} />
        ))
      ) : (
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-700">No webtoons found</p>
        </div>
      )}
    </div>
  );
};

export default WebtoonList;
