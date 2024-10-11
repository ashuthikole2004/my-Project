import img from "../assets/r1.png";
import { CONTENT } from "../constants";

function Home() {
  return (
    <>
      <div id="Home" className="border-b border-neutral-900 pb-6 lg:pt-20 pt-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20">
          
          <div className="w-full lg:w-1/2 text-center lg:text-center mt-8 lg:mt-0 lg:ml-28">
            <h1 className="text-xl lg:text-4xl font-bold tracking-tight leading-tight">
              Discover The Future At
              <p className="text-2xl lg:text-5xl lg:text-center pt-3 font-extrabold">ROBOTICS RESEARCH LAB</p>
            </h1>
            <span className="bg-gradient-to-r text-center from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-xl lg:text-4xl text-transparent font-bold block mt-4 lg:mt-6">
            TEAM ABHEDYA
            </span>
            <p className="mt-5">{CONTENT}</p>
          </div>
          
          <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
            <img
              className="rounded-3xl h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={img}
              alt="r1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
