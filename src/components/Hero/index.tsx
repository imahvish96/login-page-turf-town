import "./style.css";
function Hero() {
  return (
    <>
      <div className="relative w-[45%] max-w-[1024px] h-full flex flex-col items-center hero">
        {/* Two overlapping divs */}
        <div className="relative w-full h-[553px]">
          <div
            className="border-8 rounded-2xl border-white w-[637px] h-[553px] overflow-hidden slideInLeft"
            style={{
              backgroundImage: "url('/images/sport1.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px -208px",
              transform: "rotate(-4deg)",
              position: "absolute",
              top: "105px",
              left: "40px",
              zIndex: 1,
            }}
          ></div>
          <div
            className="border-8 rounded-2xl border-white w-[637px] h-[553px] overflow-hidden slideInRight"
            style={{
              backgroundImage: "url('/images/sport2.jpeg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px -279px",
              transform: "rotate(8deg)",
              position: "absolute",
              top: "55px",
              left: "260px",
            }}
          ></div>
        </div>

        {/* Span positioned below the divs */}
        <span className="mt-[170px] ml-[130px] text-[#7D7C7C] italic text-[22px] fadeIn">
          Lets keep the world playing!
        </span>
      </div>
    </>
  );
}

export default Hero;
