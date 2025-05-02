"use client";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon: string; // URL or path to the image
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-white rounded-lg px-5 text-center shadow cursor-pointer hover:shadow-lg transition-shadow duration-300 relative xmd:h-70 xmd:text-start lg:h-68 xl:px-8">
      <span className="size-20 grid rounded-full bg-darkviolet absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 xmd:left-5 xmd:translate-x-0">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="size-9 m-auto"
        />
      </span>
      <div className="pb-8 pt-16 space-y-3 lg:pb-12">
        <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
