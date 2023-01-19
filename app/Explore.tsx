function Explore({ text, img }: { text: string; img: string }) {
  return (
    <div
      className={`rounded-lg p-2 md:p-5 bg-gradient-to-r from-purple-500 to-[#6913d8] w-full min-w-[80px] max-h-[160px] flex flex-col justify-between hover:scale-[1.03] transition cursor-pointer`}
    >
      <div>
        <div className="w-[20%] h-1 bg-white rounded mb-2 hidden md:block" />

        <span className="text-white line-clamp-2 text-xs">{text}</span>
      </div>

      <div className="md:w-10 w-8 h-8 md:h-10 rounded-full ml-auto bg-white mt-auto">
        <img src={img} alt="logo" className="w-full p-3 object-contain" />
      </div>
    </div>
  );
}

export default Explore;
