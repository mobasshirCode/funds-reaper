"use client"
import Link from "next/link";

export default function Home() {

  return (
    <>
    <div className="text-white h-[49vh] flex flex-col justify-center items-center mx-3">
      <p className="text-5xl font-bold flex justify-center items-center text-center">Get me a Coffee! <img width={100} className="pb-4" src="coffee.gif" alt="" /></p>
      <p className="text-center">A crowdfunding platform for creators to fund their project.</p>
      <p className="my-3 text-center">A place where your fans and followers can show their appreciation by supporting you.</p>
      <div className="my-3">
      <Link href={"/SoloReaper"}><button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 mx-2 hover:cursor-pointer text-md rounded-lg">
        Get Started
      </button></Link>
      <Link href={"/about"}><button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 mx-2 hover:cursor-pointer text-md rounded-lg">
        Read More
      </button></Link>
      </div>
    </div>
    <div className="h-1 bg-purple-700 opacity-15">
    </div>
    <div className="text-white container md:mx-auto my-14">
      <p className="text-2xl font-semibold text-center">Your fans can buy you a coffee</p>
      <div className="flex justify-around items-center my-10 mx-5 text-center">
        <div className="flex flex-col justify-center items-center w-1/3">
          <img width={100} src="work.gif" alt="" />
          <p>A platform for your fans to support you for your work</p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <img width={100} src="coin.gif" alt="" />
          <p>Easy way to fund your projects and work</p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <img width={100} height={90} src="group.gif" alt="" />
          <p className="pt-5">A community that lets you enjoy what you do</p>
        </div>
      </div>
    </div>
    <div className="h-1 bg-purple-700 opacity-15">
    </div>
    <div className="text-white container md:mx-auto px-3 my-12">
      <p className="text-2xl font-semibold text-center">Learn More About us</p>
      <div className="flex justify-around items-center my-10">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JEcf865_Eaw?si=qx2bl7Z895rqq5RD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </>
  );
}
