import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-gray-800 p-2 md:p-12">
      <h1 className="bg-white text-center font-bold text-3xl rounded-lg p-4">RANDOM GIFS</h1>
      <div className="flex flex-col items-center justify-center w-full gap-10 my-10">
        <Random/>
        <Tag/>
      </div>
    </section>
  );
}
