import React from 'react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthSignin({setSigninSignup}: {setSigninSignup: React.Dispatch<React.SetStateAction<boolean>>}) {
  const toggleSigninSignup = () => {
    setSigninSignup(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="gap-4">
        <CardHeader className="text-center gap-0">
          <CardTitle className="text-xl">Welcome Back</CardTitle>
          <CardDescription>
            Login with your Facebook or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full">
                <i className='bx bxl-facebook-square text-xl'></i>
                Login with Facebook
              </Button>
              <Button variant="outline" className="w-full">
                <i className='bx bxl-google text-xl'></i>
                Login with Google
              </Button>
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" placeholder='***********' required />
              </div>
              <Button type="submit" className="w-full mt-2">
                Login
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <span onClick={toggleSigninSignup} className="underline underline-offset-4 cursor-pointer">
                Sign up
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}