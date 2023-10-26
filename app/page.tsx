import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import calculate from "../public/calculate.svg";
import diet from "../public/diet.svg";
import logo from "../public/logo.svg";

export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen flex-col items-center bg-[#3D405B] justify-center">
        <Image alt="Calorie Crafter" src={logo} height={48} />
        <div className="font-lilita-one text-[32px] text-white md:text-[64px] lg:text-[80px] max-w-[800px] p-8 text-center">
          Effortless Calorie Tracking with a Swipe
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* <Button variant="outline"> */}
          <Link href="/counter">
            <Button variant="outline">Counter</Button>
          </Link>
          {/* </Button> */}
          <Link href="/recommender">
            <Button variant="secondary" className="bg-[#81B29A]">
              Recommender
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex h-screen flex-col items-center bg-black justify-center">
        <div className="flex gap-8 lg:flex-row flex-col px-12 md:px-24">
          <Image alt="Calorie Crafter" src={calculate} height={400} />
          <div className="flex flex-col justify-center">
            <div className="text-white text-[32px] font-lilita-one">
              Count Calories Like a Pro!
            </div>
            <div className="text-white text-[20px] font-playfair-display">
              Our intuitive interface allows you to quickly log your daily food
              intake and get realtime feedback on the go. Add items, input
              portion sizes, and explore our extensive database.
            </div>
          </div>
        </div>
        <div className="flex gap-8 lg:flex-row flex-col px-12 md:px-24">
          <div className="flex flex-col justify-center">
            <div className="text-white text-[32px] font-lilita-one">
              Effortless Calorie Tracking with a Swipe
            </div>
            <div className="text-white text-[20px] font-playfair-display">
              Our intuitive interface allows you to quickly log your daily food
              intake and get realtime feedback on the go. Add items, input
              portion sizes, and explore our extensive database.
            </div>
          </div>
          <Image alt="Calorie Crafter" src={diet} height={400} />
        </div>
      </div>
      <div className="flex h-screen flex-col items-center bg-[#F2CC8F] justify-center">
        <div className="text-[32px] lg:text-[48px] font-lilita-one ">
          Our Team
        </div>
        <div className="pt-5 text-[20px] font-playfair-display lg:w-[600px] text-center">
          Meet the talented group behind Track and Eat—a dedicated bunch of food
          lovers, nutritionists, and tech enthusiasts committed to making
          healthy eating easier for everyone.
        </div>
      </div>
    </main>
  );
}
