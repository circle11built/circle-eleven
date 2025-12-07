import Form from "@/app/contact/_components/form";

export default function Contact() {
  return (
    <section className="mt-28 mb-16 lg:grid grid-cols-2 gap-36 px-5 lg:px-36">
      <div>
        <h1 className="text-3xl xl:text-6xl mb-6 font-bold">
          Request a <span className="text-red-900">quote</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg">
          Please provide some information on your project or goals and we’ll move the conversation on from there.
        </p>

        <hr className="w-4/5 mb-13" />

        <div className="hidden lg:block">
          <p>1020 Cedar Ave. Suite 125F</p>
          <p className="mb-6">St. Charles, IL</p>
          <p>(000) 000-0000</p>
          <p>circle11built@gmail.com</p>
        </div>
      </div>

      <Form />
    </section>
  );
}
