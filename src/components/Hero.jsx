import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO</p>
        <h1>
          <span className="'uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            UNLEASH
          </span>
          <span className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-400">
            {" "}
            YOUR{" "}
          </span>
          <span className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            POWER
          </span>
        </h1>
      </div>
      <p>
        I hereby commit to unleashing my{" "}
        <span className="text-blue-400">inner strength</span>, knowing that
        every challenge brings growth, every effort counts, and my
        <span className="text-blue-400"> potential is limitless</span>. Today, I
        choose both progress and perfection, striving for my best in every step.
      </p>
     <Button func={() => {
      window.location.href = '#generate'
     }} text={"ACCEPT & BEGIN"}></Button>
    </div>
  );
}
