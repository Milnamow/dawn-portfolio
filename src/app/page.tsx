import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-6 items-center justify-between text-center py-32 px-16 bg-white dark:bg-black">        
        <HeroVideo />
        <h1 className="text-4xl font-bold">Dawn Milnamow</h1>
        <div>
          <p className="text-xl">Software Engineer • Full-stack</p>
          <p className="text-md">Hockessin, DE • Saint Petersburg, FL</p>
        </div>
      </main>
    </div>
  );
}
