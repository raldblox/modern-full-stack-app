import { getOptionsForVote } from "@/utils/getRandomBloxie";
import { trpc } from "@/utils/trpc";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";

export default function Home() {
  const [ids, updateIds] = useState(() => getOptionsForVote());

  const [first, second] = ids;

  const firstBlox = trpc.useQuery(["get-pokemon-by-id", { id: first }]);
  const secondBlox = trpc.useQuery(["get-pokemon-by-id", { id: second }]);

  if (firstBlox.isLoading || secondBlox.isLoading) return null;
  console.log("data:", firstBlox);

  return (
    <HydrationProvider>
      <Client>
        <div>
          <h1 className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="text-2xl text-center">
              Which Bloxie do you like?
            </div>
            <div className="p-2" />
            <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
              <div className="w-64 h-64 flex flex-col">
                <Image
                  src={firstBlox.data?.sprites.front_default!}
                  className=""
                  alt="img"
                  width={300}
                  height={300}
                />
                <div className="text-xl text-center uppercase mt-[-2rem]">
                  {firstBlox.data?.name}
                </div>
              </div>
              <div className="p-8">OR</div>
              <div className="w-64 h-64 flex flex-col">
                <Image
                  src={secondBlox.data?.sprites.front_default!}
                  className=""
                  alt="img"
                  width={300}
                  height={300}
                />
                <div className="text-xl text-center uppercase mt-[-2rem]">
                  {secondBlox.data?.name}
                </div>
              </div>
            </div>
          </h1>
        </div>
      </Client>
    </HydrationProvider>
  );
}
