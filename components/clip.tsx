const Clip = ({ text }: { text: string }) => {
  return (
    <div className="bg-white w-fit border-[.5px] rounded-full text-sm px-3 py-2 border-neutral-300 flex items-center gap-2 shadow-xs">
      <div className="w-2 h-2 bg-red-900" />
      <p>{text}</p>
    </div>
  );
};

export default Clip;
