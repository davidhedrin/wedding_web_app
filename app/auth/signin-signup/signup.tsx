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

export default function AuthSignup({setSigninSignup}: {setSigninSignup: React.Dispatch<React.SetStateAction<boolean>>}) {
  const toggleSigninSignup = () => {
    setSigninSignup(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="gap-4">
        <CardHeader className="text-center gap-0">
          <CardTitle className="text-xl">Create Account</CardTitle>
          <CardDescription>
            Let's get started with create an new account!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="fullname">Fullname</Label>
                <Input id="fullname" type="text" placeholder="Ex. John Thor Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder='***********' required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="co_password">Confirm Password</Label>
                <Input id="co_password" type="password" placeholder='***********' required />
              </div>
              <Button type="submit" className="w-full mt-2">
                Register
              </Button>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <span onClick={toggleSigninSignup} className="underline underline-offset-4 cursor-pointer">
                  Sign in
                </span>
              </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
