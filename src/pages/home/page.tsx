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
        "Wow, this is insanely cool! I usually ask around for vendor info when I want to go snorkeling in Bali, but now I can do it with just one click. Highly recommended!",
      name: "Thalita Zahra",
      role: "CEO of CafeLink",
      imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
      quote:
        "Planning my trip has never been this easy. I just filtered my preferences, and BucketQuest gave me the perfect package. Absolutely loved it!",
      name: "Aththariq",
      role: "CEO of IzinSakit",
      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "BucketQuest takes all the hassle out of vacation planning. I especially loved the recommendations, it felt like they knew exactly what I wanted!",
      name: "Rania",
      role: "CEO of Plan International",
      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "I usually spend hours comparing prices and activities, but with BucketQuest, everything is laid out for me in minutes. Such a game-changer!",
      name: "George Hendrata",
      role: "CEO of Tiket.com",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "I love how user-friendly BucketQuest is. It’s like having a personal travel assistant in my pocket. Highly recommended for anyone who loves to explore!",
      name: "Vico Lomar",
      role: "CEO of Fore Coffee",
      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "The perfect solution for busy travelers. BucketQuest let me plan a family trip to Bali in just a few clicks. Everything was organized so well!",
      name: "Patrick Walujo",
      role: "CEO of GOTO",
      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Wow, the package looks super exciting! The activities and destination are just perfect for an unforgettable adventure. Definitely adding this to my bucket list!",
      name: "Valent Williandre",
      role: "CEO of GEM",
      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];

const faqs = [
    {
        question: 'How do I get my package?',
        answer: 'Search for Ubud, set a minimum budget of 700,000 for one person or 1,300,000 for two people, and look for adventure-type packages.'
    },
    {
        question: 'How do I book a trip?',
        answer: 'To book a trip, search for your desired destination, filter your preferences, and click "Book Now" to confirm your selection.'
    },
    {
        question: 'How do I find cafe recommendations near my travel destination?',
        answer: 'Open the Cafe page and use the search filters provided by CafeLink.'
    },
]

export default function Home() {
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
