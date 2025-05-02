"use client";

import Button from "./Button";

export default function Boost() {
  return (
    <section className="text-white bg-darkviolet bg-[url('/bg-boost-mobile.svg')] bg-no-repeat bg-position-[center_right_0.5rem] bg-cover py-14 xmd:bg-[url('/bg-boost-desktop.svg')]">
      <h3 className="text-2xl font-semibold text-center">
        Boost your links today
      </h3>
      <div className="grid pt-6">
        <Button className="mx-auto px-8 py-3 text-lg bg-cyan text-white font-semibold rounded-full hover:opacity-50 cursor-pointer">
          Get Started
        </Button>
      </div>
    </section>
  );
}
