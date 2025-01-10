import { BigSearchBar } from "@/components/big-search-bar";
import BukaLapak from '@/assets/bukalapak.png';
import PegiPegi from '@/assets/pegipegi.png';
import Traveloka from '@/assets/traveloka.png';
import Tiket from '@/assets/tiket.png';
import { ShieldCheck, CalendarDays, MapPinHouse, TentTree } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import TestimonialSlider from "@/components/testimonial-slider";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Collapsible,
    CollapsibleContent,
  } from "@/components/ui/collapsible"
import { useState } from "react";
import { ChevronsUpDown } from "lucide-react"
import AdvancedFilter from "@/components/advanced-filter";
import SurferImage from '@/assets/surfer.jpeg';
import RedVanImage from '@/assets/red-van.jpeg';
import BikiniImage from '@/assets/bikini.jpeg';
const brands = [
   {
         name: 'Traveloka',
         image: Traveloka
    },
    {
         name: 'Tiket.com',
         image: Tiket
    },
    {
         name: 'PegiPegi',
         image: PegiPegi
    },
    {
         name: 'BukaLapak',
         image: BukaLapak
   }
]

const testimonials = [
    {
      quote:
        "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
      name: "Rose Roberson",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
      quote:
        "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];

const faqs = [
    {
        question: 'How do I book a trip?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    },
    {
        question: 'How do I cancel a trip?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    },
    {
        question: 'How do I get a refund?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    },
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className="mt-14">
            <div className="pt-14 lg:px-14 px-6 lg:pt-24 border-b-4 bg-cover bg-no-repeat" style={{backgroundImage: `url(${SurferImage})`}}>
                <div className="lg:px-52 text-left">
                    <p className="py-4 text-6xl font-bold">
                    The world is yours
                    </p>
                    <span className="font-semibold">Book your next adventure - from the depths of the sea to the peaks of the mountains.</span>
                </div>
                <div className="pt-14 pb-8 lg:pb-16">
                    
                    <div className="flex justify-center items-center w-full">
                        <BigSearchBar /> 
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-full p-7"
                        >
                            Filter
                            <ChevronsUpDown />
                        </Button>
                    </div>
                    <div className="block justify-center text w-full">
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        >
                        <div className="flex items-center justify-between space-x-4 px-4">
                            
                        </div>
                            <CollapsibleContent className="space-y-2">
                                <AdvancedFilter />
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="px-14 pt-14 lg:pt-24 lg:px-52">
                <div className="block lg:flex lg:justify-between text-left text-[#76767D] align-middle items-center">
                    <span  className="align-middle pr-5">
                        Your go-to paltform for curated adventures, trusted by thousands.
                    </span>
                    <div className="block lg:flex">
                    {
                        brands.map((brand) => (
                            <div className="flex justify-center items-center" key={brand.name}>
                                <img src={brand.image} alt={brand.name} className="object-contain max-w-40" />
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="pt-14 text-left">
                    <span className="text-[#76767D]">
                        Let's Go Dive
                    </span>
                </div>
            </div>
        </div>
        <div>
            <div className="px-14 pt-14 pb-10 lg:pt-24 lg:px-52 border-b-4">
                <div className="text-left pb-6">
                    <span className="text-4xl font-bold">
                        Embark on a journey of unforgettable adventures with BucketQuest, where every experience is crafted to ingite your wanderlust. 
                        Our dedication to seamless exploration empowers you to discover and book extraordinary activites, transforming your travels into memories beyond imagination.
                    </span>
                </div>
                <Separator className="my-4 sm:block hidden"/>
                <div className="sm:flex sm:justify-around sm:px-24 block">
                    <Separator className="my-4 sm:hidden flex"/>
                    <div className="w-64">
                        <div className="pb-6">
                            <ShieldCheck  />
                        </div>
                        <div className="flex">
                            <span className="text-left text-sm">
                                Absolute privacy and security
                            </span>
                        </div>
                    </div>
                    <Separator className="my-4 sm:hidden flex"/>
                    <div className="w-64">
                        <div className="pb-6">
                            <CalendarDays  />
                        </div>
                        <div className="flex">
                            <span className="text-left text-sm">
                                Scheduling Flexibility & last minute management
                            </span>
                        </div>
                    </div>
                </div>
                <Separator className="my-4 sm:block hidden"/>
                <div className="sm:flex sm:justify-around sm:px-24 block">
                    <Separator className="my-4 sm:hidden flex"/>
                    <div className="w-64">
                        <div className="pb-6">
                            <TentTree  />
                        </div>
                        <div className="flex">
                            <span className="text-left text-sm">
                                Access to 40,000+ networks across Indonesia
                            </span>
                        </div>
                    </div>
                    <Separator className="my-4 sm:hidden flex"/>
                    <div className="w-64">
                        <div className="pb-6">
                            <MapPinHouse  />
                        </div>
                        <div className="flex">
                            <span className="text-left text-sm">
                                Access to thousands of vendor with best positioning
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="pt-14 px-14 border-b-4 bg-cover bg-no-repeat" style={{backgroundImage: `url(${RedVanImage})`}}>
                <div className="lg:px-52 text-left">
                    <p className="text-white py-4 lg:text-6xl text-5xl font-bold">
                        BucketQuest Customers
                    </p>
                    <span className="text-white">Read what our clients have to say about us</span>
                </div>
                <div className="">
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </div>
        </div>
        <div>
            <div className="pt-14 px-14 border-b-4 pb-6">
                <div className="lg:px-52 text-left pb-6">
                    <p className="py-4 text-6xl font-bold">
                        FAQs
                    </p>
                    <span className="text-[#76767D]">Here are answers to questions our clients ask</span>
                </div>
                <div className="lg:px-52">
                    <Accordion type="single" collapsible>
                        {
                            faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>
                                            {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="p-4 text-left">
                                            <span className="text-md">{faq.answer}</span>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </div>
        <div>
            <div className="pt-14 pb-32 px-14 border-b-4 bg-cover bg-no-repeat" style={{backgroundImage: `url(${BikiniImage})`}}>
                <div className="lg:px-52">
                    <div className="pb-6">
                        <span className="text-white">Experience holiday chartes like never before</span>
                        <p className="text-white py-4 lg:text-6xl text-5xl font-bold">
                            Sit back, we'll coordinate the rest
                        </p>
                    </div>
                    <Link to="/login">
                        <Button
                            className="w-64 rounded-full"
                        >
                            Join Us Now!
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
