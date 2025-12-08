"use client";

import Clip from "@/components/clip";
import CTAButton from "@/components/cta-button";
import LetsWorkTogether from "@/components/lets-work-together";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const items = [
    {
      label: "Metal Cards",
      image: "/metal-card.png",
    },
    {
      label: "Hobby / 3D Printed Components",
      image: "/boat.png",
    },
    {
      label: "Small Metal Parts",
      image: "/parts.png",
    },
    {
      label: "Fittings",
      image: "/pipe.png",
    },
    {
      label: "Countersinking",
      image: "/countersunk.png",
    },
    {
      label: "Brackets",
      image: "/bracket.png",
      style: { objectPosition: "50% 45%" },
    },
  ];

  return (
    <section>
      {/* HEADER */}
      <div className="pt-15 mx-5 lg:mx-24 pb-20 md:pb-0">
        <Clip text="Trusted Manufacturing Partner" />

        <div className="flex items-center justify-between mt-5 lg:mt-0">
          <h1 className="font-bold font-mona text-4xl md:text-6xl sm:max-w-xl lg:max-w-full lg:leading-16 lg:mt-0">
            Precision Machined Parts.
            <br />
            Delivered Fast.
          </h1>

          <div className="hidden lg:block max-w-lg">
            <p>// SINCE - 2025 //</p>

            <p className="my-5">
              CNC Machining, prototyping, and small-batch production with industry-leading quiality and turnaround times
            </p>

            <CTAButton
              text="Explore Our Capabilities"
              bgColor="bg-black"
              iconBgColor="bg-red-900"
              onClick={() => router.push("/services")}
            />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="md:flex justify-between px-8 mb-12 mt-20 font-semibold hidden">
        <h4>Based in: St. Charles, IL</h4>

        <button
          className="text-neutral-500 hover:text-red-700 hover:cursor-pointer"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        >
          SCROLL DOWN
        </button>

        <h4>41.9168° N, 88.3046° W</h4>
      </div>

      <img src="/cnc-prop.jpg" alt="cnc machine" className="w-full object-cover h-[30rem] lg:h-[64rem]" />

      {/* WORK */}
      <div className="px-5 md:px-20 py-20">
        <Clip text="What We Do" />
        <h2 className="font-bold max-w-3xl text-2xl md:text-3xl lg:text-5xl mb-6 mt-4">
          Scalable <span className="text-red-900">capabilities</span> for every challenge
        </h2>

        <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-10  px-5 md:px-16">
          {items.map((item) => (
            <div className="mb-10 md:mb-0" key={item.label}>
              <img className="h-72 w-full object-cover rounded-sm" style={item?.style} src={item.image} />
              <p className="text-xl md:text-2xl mt-3 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <LetsWorkTogether />
    </section>
  );
}
