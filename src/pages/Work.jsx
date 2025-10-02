import Hero from "../components/Hero";
import PhonePreview from "../components/PhonePreview";

export default function Work() {
  return (
    <main className="flex flex-col justify-between md:flex-row px-10 py-10">
      <div>
        <Hero />
        {/* <ProjectItem /> x 4 with props*/}
      </div>
      <div>
        <PhonePreview />
      </div>
    </main>
  );
}
