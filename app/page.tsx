import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/gammarix-logo.svg"
          alt="Gammarix Protocol"
          width={500}
          height={500}
          className="rounded-full mb-6"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Gammarix Protocol</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">Swap, earn, leverage, and build on the leading decentralized crypto trading protocol.</p>
        <Button>Coming soon!</Button>      
        </main>
    </div>
  );
}
