export default function Hero() {
  return (
    <div className="w-full md:w-[70vw]">
      <a
        href="https://www.bible.com/bible/59/MIC.6.8"
        target="_blank"
        className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-p gap-1.5 font-medium inset-ring inset-ring-gray-400/20 text-white hover:bg-neutral-900 duration-300"
      >
        <i className="bi bi-bookmark-fill text-secondary"></i> Micah 6:8{" "}
        <i className="bi bi-arrow-up-right"></i>
      </a>
      <h1 className="font-cabinet text-h3 md:text-h2 lg:text-h1 font-bold">
        <span className="text-gradient">Serving</span>{" "}
        <span className="font-satoshi font-normal">through technology</span>
      </h1>
      <h3 className="font-satoshi md:text-p lg:text-h3 font-normal text-right text-tertiary border-t-1 border-transparent [border-image:linear-gradient(90deg,black,#868686)_1]">
        Selected Projects <i className="bi bi-arrow-down"></i>
      </h3>
    </div>
  );
}
