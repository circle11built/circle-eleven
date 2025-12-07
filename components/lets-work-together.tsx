import Link from "next/link";

interface Props {
  hideDescription?: boolean;
}

export default function LetsWorkTogether({ hideDescription }: Props) {
  return (
    <div className="text-white px-10 md:px-40 py-28 bg-gradient-to-r from-red-950 from-60% to-red-900 ">
      <h1 className="text-3xl font-semibold md:text-5xl mb-6">Let’s Work Together</h1>

      {!hideDescription && (
        <p className="max-w-3xl mb-24 text-md md:text-lg">
          We love taking on new projects. Reach out, and one of us will personally get back to you to talk through your machining needs and
          next steps.
        </p>
      )}

      <Link className="bg-white py-6 px-16 rounded-md text-lg text-black whitespace-nowrap rounded-br-xl" href="/contact">
        Contact Us
      </Link>
    </div>
  );
}
