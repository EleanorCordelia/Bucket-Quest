import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useApi } from "@/hooks/useApi"
import { userDto } from "@/types/UserDto"
import { LoadingSpinner } from "./ui/spinner"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useLocalStorage } from "@uidotdev/usehooks";

import { useGoogleLogin } from '@react-oauth/google';
import axios, { AxiosResponse } from "axios"

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const RedirectToHome = () => {
  window.location.href = "/"
}
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [, setToken] = useLocalStorage("token", "")
  const [, setName] = useLocalStorage("name", "")
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const { loading, call } = useApi<userDto>(import.meta.env.VITE_API_URL + "/api/Account/login", {method: "POST"})

  async function onSubmit(formData: z.infer<typeof FormSchema>) {

    const result = await call(formData)

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Login tidak berhasil",
        description: "Email atau password salah",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
    if (result.data) {
      toast({
        variant: "default",
        title: "Login berhasil",
        description: "Anda berhasil login",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      setToken(result.data.token)
      setName(result.data.name)
      RedirectToHome()
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      const result: AxiosResponse<userDto> = await axios.post(import.meta.env.VITE_API_URL + "/api/Account/Sso", {
        code: response.access_token
      })
      console.log(result.data)
      setToken(result.data.token)
      setName(result.data.name)
      RedirectToHome()
    }
  });
  return (
    <>
    <Form {...form}>
      <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="grid gap-2">
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Email</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Email" />
                  </FormControl>
                  <div className="flex items-center">
                    <FormMessage />
                  </div>
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <div className="grid gap-2">
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" />
                  </FormControl>
                  <div className="flex items-center">
                    <FormMessage />
                  </div> 
                </FormItem>
              </div>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
            Login
            <LoadingSpinner hidden={!loading} />
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <Button variant="outline" className="w-full" type="button" onClick={() => googleLogin()}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" 
              fill="currentColor">
              </path>
          </svg>
            Login with Google
          </Button>
        </form>
    </Form>
        {/* 
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="email">Email</Label>
            </div>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <Button variant="outline" className="w-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" 
              fill="currentColor">
              </path>
          </svg>
            Login with Google
          </Button>
        </div> */}
        
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </>
  )
}
