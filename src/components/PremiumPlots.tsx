import { Button } from "./ui/button";

export function PremiumPlots() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Premium Land Plots in Nashik City & NMRDA
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Transparent, technology-driven land investment ecosystem connecting buyers and investors with verified, high-growth plotting opportunities across Nashik region.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-cyan-400 text-black hover:bg-cyan-500">Browse Available Plots</Button>
            <Button variant="outline" className="text-white border-white hover:bg-gray-800">Investment Opportunities</Button>
          </div>
        </div>
      </div>
    </section>
  );
}