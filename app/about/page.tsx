"use client";

import Clip from "@/components/clip";
import CTAButton from "@/components/cta-button";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <section className="mt-28">
      <div className="md:grid grid-cols-5 px-5 lg:px-56 mb-64">
        <div className="col-span-2">
          <Clip text="Who We Are" />
          <h1 className="font-semibold text-3xl xl:text-6xl lg:mb-0 mb-10 mt-3">About us</h1>
        </div>

        <div className="space-y-5 col-span-3 text-neutral-800">
          <p>
            Every project, whether it’s a prototype, a small production run, or a one-off part, is a chance to turn an idea into something
            solid that works exactly as it should.
          </p>

          <p>
            We’ve been in the manufacturing world since 2017, working in all kinds of shops — from job shops to precision mold and die work,
            and later tool rooms focused on repair and R&D. Along the way, we learned what matters most: attention to detail, pride in the
            craft, and doing things right the first time.
          </p>

          <p>
            We started this business to create a shop built around those same values — honesty, precision, and reliability. We believe in
            keeping things simple: clear communication, quick turnarounds, and consistent quality.
          </p>

          <p>
            We specialize in metal business cards, small metal parts (up to 4” x 4” x 4”), hobby and DIY components, prototypes, small-lot
            manufacturing under 100 pieces, and one-off custom jobs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <img src="/lathe.jpg" className="hidden md:block md:col-span-3 h-[35rem] w-full object-cover" />

        <div className="bg-red-900 p-5 col-span-5 md:col-span-2 flex flex-col justify-between">
          <div>
            <p className="text-white font-medium text-lg mb-6">
              We are a team dedicated to precision engineering, delivering solutions that shape industries worldwide. Our journey is defined
              by trust, quality, and a commitment to excellence in every project.
            </p>

            <CTAButton text="Contact Us" bgColor="bg-black" iconBgColor="bg-red-900" onClick={() => router.push("/contact")} />
          </div>

          {/* MARQUEE */}
          <div className="marquee w-full mt-10 md:mt-0">
            <div className="marquee-inner">
              <p className="text-red-500/50 text-8xl font-semibold marquee-duplicate">SINCE - 2025</p>
              <p className="text-red-500/50 text-8xl font-semibold marquee-duplicate">SINCE - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
