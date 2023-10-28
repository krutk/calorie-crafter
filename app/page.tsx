import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import calculate from "../public/calculate.svg";
import diet from "../public/diet.svg";
import logo from "../public/logo.svg";
import person from "../public/undefined.jpeg";
import person1 from "../public/undefined1.jpeg";

export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen flex-col items-center bg-[#3D405B] justify-center">
        <Image alt="Calorie Crafter" src={logo} height={48} />
        <div className="font-lilita-one text-[32px] text-white md:text-[64px] lg:text-[80px] max-w-[800px] p-8 text-center">
          Effortless Calorie Tracking with a Swipe
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          {/* <Button variant="outline"> */}
          <Link href="/counter">
            <Button variant="outline">Hub</Button>
          </Link>
          {/* </Button> */}
          <Link href="/recommender">
            <Button variant="secondary" className="bg-[#81B29A]">
              Suggester
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
      <div className="flex h-screen flex-col items-center bg-[#F2CC8F] justify-center px-12 md:px-24">
        <div className="text-[32px] lg:text-[48px] font-lilita-one ">
          Our Team
        </div>
        <div className="pt-5 text-[20px] font-playfair-display lg:w-[600px] text-center">
          Meet the talented group behind Track and Eat—a dedicated bunch of food
          lovers, nutritionists, and tech enthusiasts committed to making
          healthy eating easier for everyone.
        </div>
        {/* box-sizing: border-box;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px 40px 40px 40px;
background-color: #efc278;
overflow: visible;
align-content: center;
flex-wrap: nowrap;
gap: 20;
position: absolute;
border-radius: 30px; */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <Card className="h-[300px] w-auto p-10 bg-[#EFC278] border items-center justify-center">
            <Image
              alt="undefined person"
              className="rounded-full"
              src={person}
              height={80}
              width={80}
            />
          </Card>
          <Card className="h-[300px] p-10 bg-[#EFC278] gap-5"></Card>
          <Card className="h-[300px] p-10 bg-[#EFC278] gap-5"></Card>
          <Card className="h-[300px] p-10 bg-[#EFC278] gap-5"></Card>
        </div>
      </div>
    </main>
  );
}
