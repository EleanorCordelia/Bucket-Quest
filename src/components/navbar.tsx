/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import BucketQ from "@/assets/BucketQ.png"
import { isLoggedin, logOut } from "@/utils/user"



export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link to="#" className="flex items-center">
            <img
                src={BucketQ}
                alt="BucketQ"
                className="h-8 w-auto"
            />
            <span className="sr-only">BucketQ</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Home
            </Link>
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              About
            </Link>
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Services
            </Link>
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {isLoggedin() && (
              <>
              <Link to="/">
                <Button variant="outline" size="sm">
                    Dashboard
                </Button>
              </Link>
              <Button size="sm" onClick={() => logOut()}>
                  Logout
              </Button>
              </>
            )}
            {!isLoggedin() && (
              <>
              <Link to="/login">
                  <Button variant="outline" size="sm">
                      Sign in
                  </Button>
              </Link>
              <Link to="/signup">
                  <Button size="sm">
                      Sign up
                  </Button>
              </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}