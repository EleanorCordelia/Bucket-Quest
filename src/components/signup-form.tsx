import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useApi } from "@/hooks/useApi"
import { LoadingSpinner } from "./ui/spinner"
import { useToast } from "@/hooks/use-toast"
import { userDto } from "@/types/UserDto"
import { ToastAction } from "./ui/toast"

const FormSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  c_password: z.string().min(8)
}).refine(data => data.password === data.c_password, {
  message: "Passwords do not match",
  path: ["c_password"],
})

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { loading, call } = useApi<userDto>(import.meta.env.VITE_API_URL + "/api/Account/register", {method: "POST"})
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
        c_password: "",
      },
    })
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { c_password, ...formData } = data
    console.log(formData)
    const result = await call(formData)
    if (result.error) {
      toast({
        variant: "destructive",
        title: "Register tidak berhasil",
        description: "Email telah terdaftar",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
    if (result.data) {
      toast({
        variant: "default",
        title: "Account Created",
        description: "Account has been created successfully",
      })
      console.log(result.data)
    }
  }
  return (
    <Form {...form}>
      <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <div className="grid gap-2">
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Name</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Name" />
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
          <FormField
            control={form.control}
            name="c_password"
            render={({ field }) => (
              <div className="grid gap-2">
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Confirm Password</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Confirm Password" />
                  </FormControl>
                  <div className="flex items-center">
                    <FormMessage />
                  </div>
                </FormItem>
              </div>
            )}
          />
          <Button type="submit" className="w-full">
            Register
            <LoadingSpinner hidden={!loading} />
          </Button>
        </div>
        <div className="text-center text-sm">
          Already Have an Account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  )
}
