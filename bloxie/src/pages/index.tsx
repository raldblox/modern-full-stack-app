import { getOptionsForVote } from "@/utils/getRandomCrypto";
import { trpc } from "@/utils/trpc";

export default function Home() {
  
  const [first, second] = getOptionsForVote();
  return (
    <div>
      <h1 className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">
          Which crypto you love the most?
        </div>
        <div className="p-2" />
        <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
          <div className="w-16 h-16 bg-yellow-400">{first}</div>
          <div className="p-8">Vs</div>
          <div className="w-16 h-16 bg-violet-500">{second}</div>
        </div>
      </h1>
    </div>
  );
}
