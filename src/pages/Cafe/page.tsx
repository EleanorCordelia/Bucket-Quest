import CafeLinkLogo from '@/assets/cafelink-logo-white.png'
import CafeLinkText from '@/assets/cafelink-text-white.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import CoffeBanner from '@/assets/coffee_image.png'
import Cafe from '@/types/Cafe'
import { useEffect, useState } from 'react'
import useCafe from '@/hooks/useCafe'

interface CardProps {
    id?: number;
    title: string;
    priceRange: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    show_detail?: boolean;
  }
const Card: React.FC<CardProps> = ({ title, priceRange, description, imageUrl, show_detail = true }) => {
    return (
        <div className="flex flex-col items-center">
          <img className="w-full rounded-t-xl" src={imageUrl} alt={title} />
          <div className="px-6 py-4 bg-[#FFF9F1] shadow-lg rounded-b-xl w-full h-full flex flex-col justify-between">
            <h2 className="font-bold text-xl mb-2 text-center text-[#603809]">{title}</h2>
            <p className="text-gray-600 text-center mb-2">{priceRange}</p>
            <p className="text-center text-[#603809] font-bold pb-2">{description}</p>
            
          </div>
          {show_detail &&
          <div className='flex justify-center'>
            <Link to={ import.meta.env.VITE_CAFE_LINK_URL as string } target='_blank'>
              <Button className="-mt-16 bg-[#F9C06A] hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full w-28">
                  Detail
              </Button>
            </Link>
          </div>
            }
        </div>
      );
  };

export default function CafePage() {
    const { loading : loadingCafe, call : callCafe} = useCafe()
    const [cafe, setCafe] = useState<Cafe[]>([])
    useEffect(() => {
        async function fetchCafe() {
            const result = await callCafe()
            if(result.data) {
                setCafe(result.data)
            }
        }
        fetchCafe()
    }, [])
    return (
        <div className="mt-14">
            <div className="pt-24 pb-12 xl:px-32 px-14 border-b-4 bg-cover bg-no-repea leading-8" style={{background: `linear-gradient(89.82deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0) 87.45%), url(${CoffeBanner})`, backgroundSize: 'cover'}}>
                <h1 className="text-5xl font-bold text-white">Partners</h1>
                <p className='text-white pb-5'>Complete your trip with Cafe recommendation from our partner</p>
                <div className="flex">
                    <img src={CafeLinkLogo} alt="CafeLink Logo" className="h-auto max-w-32  md:max-w-max"/>
                    <img src={CafeLinkText} alt="CafeLink Text" className="h-auto max-w-32 md:max-w-max"/>
                </div>
                <p className="text-left text-[#F9C06A]">Find the perfect coffee experience tailored just for you</p>
                <p className='text-left text-white w-2/3'><span className='font-bold'>CaféLink connects you to the best coffee shops around, making every sip memorable.</span></p>
                <p  className='text-left text-white w-2/3'>Enjoy the convenience of exploring menus and added to your favorite list all in one platform.</p>
                <p className='text-left text-white'>Start your coffee journey today!</p>
                <div className='flex pb-14'>
                <Link to={ import.meta.env.VITE_CAFE_LINK_URL as string } target='_blank'>
                    <Button className='bg-[#F9C06A] hover:bg-yellow-600 text-black mt-4 ml-6 rounded-full'>Get Started</Button>
                </Link>
                </div>
            </div>

            <div className='text-center py-5'>
                <p>Discover the <span className='font-bold'>cafe</span> that matches your vibe and fulfills your cravings.</p>
            </div>
            <div className='py-4 px-6 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    loadingCafe ? <div>Loading...</div> :
                    cafe.slice(0,4).map((cafe) => (
                        <Card title={cafe.name} priceRange={`${cafe.districtAddress}, ${cafe.cityAddress}`} description={cafe.types.map((type) => type.name).join(' dan ')} imageUrl={cafe.imageUrl} buttonText='Order Now' id={cafe.id} key={cafe.id}/>
                    ))
                }
            </div>
        </div>
    )
}