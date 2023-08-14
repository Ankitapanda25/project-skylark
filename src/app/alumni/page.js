import AlumniCard from "@/components/AlumniCard/AlumniCard";
import AlumniData from "@/config/alumni";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-slate-950 w-[100%] h-[100vh] relative overflow-x-hidden">
      <div className="w-[407.65px] h-[396px] left-[-200px] top-[-200px] absolute bg-fuchsia-600 rounded-full blur-[160px]"></div>
      <div className="w-[407.65px] h-[582px] left-[-123px] top-[592px] absolute bg-purple-500 rounded-full blur-[300px]"></div>
      <div className="w-[407.65px] h-[396px] right-[-200px] top-[-200px] absolute bg-fuchsia-950 rounded-full blur-[150px]"></div>
      <div className="w-[360.65px] h-[206px] right-[-200px] bottom-[-90rem] absolute bg-pink-600 rounded-full blur-[140px]"></div>
      <div>
        <Image
          width={255}
          height={785}
          src="/images/alumni/vector 8.png"
          alt="bg-vector"
          className="my-[9rem] absolute lg:h-[80%]  sm:h-[50%]"
        />
        <Image
          width={255}
          height={785}
          src="/images/alumni/vector 10.png"
          alt="bg-vector"
          className="my-[23rem] absolute lg:h-[39%] w-[50vw] sm:h-[20%]"
        />
      </div>

      <div className="text">
        <h2
          style={{ fontFamily: "julius sans one, sans-serif" }}
          className="text-white xs:text-5xl mx-[10.6%] my-10 relative xxs:text-[27px] xs:text-[40px]"
        >
          Udaan Alumni
        </h2>
        <h2
          style={{ fontFamily: "poppins, sans-serif" }}
          className="text-white mx-[11%] text-3xl my-[-2.8rem]  border border-white border-t-0 border-b-2 border-l-0 border-r-0 w-[30.4%] relative xxs:text-[17px] xs:text-[17px] "
        >
          Members
        </h2>
      </div>

      <div
        className="grid lg:grid-cols-2 xs:grid-cols-1 sm:place-items-center gap-y-32 lg:gap-x-[6rem] lg:ml-[11.5%] lg:mr-[8%] mt-[8rem] sm:mb-10  relative lg:place-items-start xs:mb-10 xxs:mb-10 xxs:mr-8"
        style={{ fontFamily: "poppins, sans-serif" }}
      >
        <AlumniCard data={AlumniData} />
      </div>
    </div>
  );
}
