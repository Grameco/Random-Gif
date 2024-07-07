import Spinner from "./Spinner";
import useHook from "../hooks/useHook";

export default function Random() {
  const {gif, loading, fetchData} = useHook()

  return (
    <section className="md:w-1/2 min-h-[450px] flex flex-col items-center justify-between gap-3 bg-green-500 rounded-lg border border-black p-4 px-12">
      <h1 className="font-bold text-2xl md:text-3xl">A RANDOM GIF</h1>

      {loading === true ? <Spinner/> : <img src={gif} alt="gif" width={550} height={200} /> }
      
      <button onClick={() => fetchData()} className=" text-center w-full font-semibold text-2xl rounded-lg p-2 bg-green-200">Generate</button>
    </section>
  );
}
