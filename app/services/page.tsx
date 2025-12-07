import Clip from "@/components/clip";

function Services() {
  const items = [
    {
      title: "Product assembly",
      description: "Complete product assembly services with quality testing and packaging solutions.",
      image: "/product-assembly.png",
    },
    {
      title: "Sheet metal fabrication",
      description: "Comprehensive sheet metal services including cutting, forming, welding, and finishing.",
      image: "/sheet-metal-fabrication.png",
    },
    {
      title: "CNC machining services",
      description: "Precision CNC machining with 5-axis technology for complex, high-accuracy parts.",
      image: "/cnc-machining-services.png",
    },
    {
      title: "Surface finishing",
      description: "Professional surface treatment and finishing services for enhanced durability, aesthetics, and performance.",
      image: "/surface-finishing.png",
    },
    {
      title: "3D Printing",
      description: "High-precision 3D printing with advanced additive manufacturing technology and rigorous quality control.",
      image: "/3d-printing.png",
    },
    {
      title: "Quality Inspection",
      description: "Advanced inspection and testing to ensure every component meets precise specifications and quality standards.",
      image: "/quality-control.png",
    },
  ];

  const steps = [
    {
      title: "Design and planning",
      background: "bg-white",
      primary: "text-neutral-600",
      secondary: "text-red-900",
    },
    {
      title: "Precision machining",
      background: "bg-red-900",
      primary: "text-white",
      secondary: "",
    },
    {
      title: "Quality check & Delivery",
      background: "bg-neutral-600",
      primary: "text-red-400",
      secondary: "text-white",
    },
  ];

  return (
    <>
      {/* SERVICES */}
      <section className="pt-20 max-w-7xl mx-auto mb-30">
        <h1 className="text-center font-semibold text-3xl md:text-7xl">Our Services</h1>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {items.map((item) => (
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <img src={item.image} className="h-52 w-full object object-cover rounded-lg" />
              <h1 className="mt-3 text-xl font-semibold">{item.title}</h1>
              <p className="mt-2 text-neutral-600 mb-5">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-neutral-900 py-20 lg:py-42 px-10 lg:px-40 lg:flex gap-20">
        <div>
          <Clip text="Simple & Transparent" />
          <h1 className=" text-4xl lg:text-6xl max-w-md leading-16 text-white font-semibold lg:mt-5">Our Proven Workflow</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center lg:justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center rounded-full min-h-30 w-30 min-w-30 lg:h-70 lg:w-70 ${step.background}`}
            >
              <h1 className={`${step.primary} font-semibold lg:text-lg mb-3`}>Step {index + 1}</h1>
              <h1 className={`${step.secondary} font-semibold text-center lg:text-lg px-4`}>{step.title}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
