import { ArrowRight } from "lucide-react";

interface Props {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  iconBgColor?: string;
}

export default function CTAButton({ text, onClick, bgColor = "bg-red-900", iconBgColor = "bg-black" }: Props) {
  return (
    <button
      className={`flex items-center justify-between ${bgColor} rounded-sm rounded-br-2xl pr-2 pl-6 py-2 text-white font-medium gap-5 cursor-pointer`}
      onClick={onClick}
    >
      <p className="whitespace-nowrap">{text}</p>
      <div className={`${iconBgColor} rounded-br-xl p-1`}>
        <ArrowRight />
      </div>
    </button>
  );
}
