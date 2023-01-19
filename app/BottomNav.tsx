function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full left-0 py-3 bg-white flex md:hidden justify-evenly">
      <div className="flex flex-col items-center space-y-3">
        <img
          src="/job.svg"
          alt="job"
          className="w-[20px] h-[20px] object-contain"
        />

        <p className="text-xs text-neutral-900">Jobs</p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <img
          className="w-[20px] h-[20px] object-contain"
          src="/companie.svg"
          alt="companie"
        />

        <p className="text-xs text-neutral-900">Companies</p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <img
          className="w-[20px] h-[20px] object-contain"
          src="/carreer.svg"
          alt="career"
        />

        <p className="text-xs text-neutral-900">Career Fair</p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <img
          className="w-[20px] h-[20px] object-contain"
          src="/spl.svg"
          alt="spl"
        />

        <p className="text-xs text-neutral-900">SPL Korea</p>
      </div>
    </div>
  );
}

export default BottomNav;
