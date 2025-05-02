"use client";
import Card from "@/components/Card";


export default function Statistics() {
    return (
      <main className="bg-gray-100 pt-10 px-5 xs:px-6 sm:px-8 lg:px-14 xl:px-20 xxl:px-36">
        <div className="text-center space-y-3 md:pb-8">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            Advanced Statistics
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>

        <div className="grid py-20 gap-y-20 xmd:grid-cols-3 xmd:gap-4 xmd:pb-36 xmd:pt-16 lg:gap-8 lg:pb-40">
          <div className=" lg:translate-y-0">
            <Card
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
              icon="/icon-brand-recognition.svg"
            />
          </div>
          <div className="xmd:translate-y-7 lg:translate-y-10">
            <Card
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              icon="/icon-detailed-records.svg"
            />
          </div>
          <div className="xmd:translate-y-15 lg:translate-y-20">
            <Card
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              icon="/icon-fully-customizable.svg"
            />
          </div>
        </div>
      </main>
    );
}