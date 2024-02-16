export default function Slide({ show, data }) {
  //   console.log(data);
  return (
    <div className={`carousel-item relative active`}>
      {/* <img
        src={Charity}
        className="carousel-image slide-right img-fluid blur-sm brightness-75"
        alt="..."
      /> */}
      <img
        src={data.img}
        className="carousel-image slide-right img-fluid backdrop-brightness-75"
        alt="..."
      />
      <div className="absolute z-50 left-0 xl:top-2/4 top-2/3 xl:mt-20  w-full flex flex-col items-center justify-center  slide-left backdrop-brightness-105 bg-white/30 backdrop-blur-sm xl:p-3 h-fit">
        <p className="font-bold text-xl xl:text-5xl text-[#6d3d45] px-2 xl:w-4/6 slide-left">
          {data.title}
        </p>

        <p className="xl:text-2xl  xl:text-justify  text-black/80 xl:w-4/6 px-2">
          {data.description}
        </p>
      </div>
    </div>
  );
}
