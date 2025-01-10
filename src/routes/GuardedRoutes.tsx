import { isLoggedin } from "@/utils/user"
import { Navigate } from "react-router-dom";
import TripSearch from '@/pages/trip/search';
import DetailTrip from "@/pages/trip/detail";
import Booking from "@/pages/booking/page";
import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Cafe from "@/pages/Cafe/page";
const isUserAuthenticated = () => {
    return isLoggedin();
}

const GuardedRoutes = ({ children }: { children: React.ReactNode }) => {
    return isUserAuthenticated() ? <>{children}</> : <Navigate to="/" />
}

const WithNav = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <NavBar/>
            {children}
        <Footer/>
        </>
    )
}

const routeList = [
    {
        path: '/trip/search',
        element: <GuardedRoutes>
            <WithNav>
                <TripSearch />
            </WithNav>
        </GuardedRoutes>
    },
    {
        path: '/trip/detail/:id',
        element: <GuardedRoutes>
            <WithNav>
                <DetailTrip />
            </WithNav>
        </GuardedRoutes>
    },
    {
        path: '/booking',
        element: <GuardedRoutes>
            <WithNav>
                <Booking />
            </WithNav>
        </GuardedRoutes>
    },
    {
        path: '/cafe',
        element: <GuardedRoutes>
            <WithNav>
                <Cafe />
            </WithNav>
        </GuardedRoutes>
    }
]

export default routeList;