import Background from "../Assets/ankara.png";

const Explore = () => {
  return (
    <div className="w-full px-8 flex items-center justify-center flex-col gap-10 mt-10">
      <h1 className=" text-4xl text-[#085CB2] ">
        Explore Our Unique Collection of Exclusive Categories
      </h1>

      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center ">
          <div
            className={`lg:w-[560px] md:w-[450px] w-full  h-[300px] rounded-2xl bg-[#d6eaff] p-5`}
            style={{
              background: `url(${Background})`,
            }}
          >
            <div className="flex flex-col gap-5 text-[#ecf2f8] text-base">
              <h1 className="text-[20px]">Cord Lace Attire</h1>
              <span className="text-[18px] font-bold">200+</span>
            </div>
          </div>
          <div
            className={`lg:w-[560px] md:w-[450px] w-full  h-[300px] rounded-2xl bg-[#d6eaff] p-5`}
            style={{
              background: `url(${Background})`,
            }}
          >
            <div className="flex flex-col gap-5 text-[#ecf2f8] text-base">
              <h1 className="text-[20px]">Cord Lace Attire</h1>
              <span className="text-[18px] font-bold">200+</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`lg:w-[560px] md:w-[450px] w-full  h-[300px] rounded-2xl bg-[#d6eaff] p-5`}
            style={{
              background: `url(${Background})`,
            }}
          >
            <div className="flex flex-col gap-5 text-[#ecf2f8] text-base">
              <h1 className="text-[20px]">Cord Lace Attire</h1>
              <span className="text-[18px] font-bold">200+</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row gap-5 ">
          <div
            className={`lg:w-[560px] md:w-[450px] w-full  h-[300px] rounded-2xl bg-[#d6eaff] p-5`}
            style={{
              background: `url(${Background})`,
            }}
          >
            <div className="flex flex-col gap-5 text-[#ecf2f8] text-base">
              <h1 className="text-[20px]">Cord Lace Attire</h1>
              <span className="text-[18px] font-bold">200+</span>
            </div>
          </div>{" "}
          <div
            className={`lg:w-[560px] md:w-[450px] w-full  h-[300px] rounded-2xl bg-[#d6eaff] p-5`}
            style={{
              background: `url(${Background})`,
            }}
          >
            <div className="flex flex-col gap-5 text-[#ecf2f8] text-base">
              <h1 className="text-[20px]">Cord Lace Attire</h1>
              <span className="text-[18px] font-bold">200+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
