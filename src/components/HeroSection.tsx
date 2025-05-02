// import Image from "next/image"
import Button from "@/components/Button";


export default function HeroSection() {
    return (
      <main className="py-20 mb-10 lg:flex lg:flex-row-reverse lg:items-center lg:py-24 ">
        <div className="bg-[url('/illustration-working.svg')] bg-cover bg-position-[center_left_2rem] bg-no-repeat h-72 w-full xs:bg-contain xs:h-96 sm:h-[500px] md:bg-center lg:bg-position-[center_left_0.08rem] lg:bg-cover lg:w-[1250px] xl:h-[550px]"></div>
        <section className="px-5 xs:px-6 sm:px-8 lg:pl-14 xl:pl-20 xxl:pl-36">
          <div className="py-8 space-y-3">
            <h1 className="text-5xl font-black leading-13 text-center lg:text-start lg:leading-16 lg:text-[56px] xl:leading-18 xl:text-[64px]">
              More than just shorter links
            </h1>
            <p className="text-lg text-center text-gray-500 leading-7 lg:text-start lg:w-[430px]">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="grid py-4">
              <Button className="mx-auto px-8 py-3 text-lg bg-cyan text-white font-semibold rounded-full hover:opacity-50 cursor-pointer lg:ml-0">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
}