import { useState } from "react";
import Spinner from "./Spinner";
import useHook from "../hooks/useHook";

export default function Tag() {
  
  const [tag, setTag] = useState("dog")
  const {gif, loading, fetchData} = useHook(tag)

  return (
    <section className="md:w-1/2 min-h-[450px] flex flex-col items-center justify-between gap-3 bg-yellow-500 rounded-lg border border-black p-4 px-12">
      <h1 className="font-bold text-2xl md:text-3xl uppercase">A RANDOM {tag} GIF</h1>

      {loading === true ? <Spinner/> : <img src={gif} alt="gif" width={550} height={200} /> }

      <div className="flex flex-col w-full gap-2 my-4">
        <input 
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        className=" text-center w-full font-semibold text-2xl rounded-lg p-2 bg-white outline-none"/>
        <button onClick={() => fetchData()} className=" text-center w-full font-semibold text-2xl rounded-lg p-2 bg-white">Generate</button>
      </div>

    </section>
  );
}
