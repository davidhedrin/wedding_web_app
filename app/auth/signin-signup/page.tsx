"use client"

import React, { useState } from 'react'
import AuthSignin from './signin'
import AuthSignup from './signup';

export default function AuthPage() {
  const appName = process.env.APPS_NAME || "Weeds-App";
  const [signinSignup, setSigninSignup] = useState(true);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-muted px-6 md:px-10">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            {/* <GalleryVerticalEnd className="size-4" /> */}
          </div>
          {appName}
        </a>

        {
          signinSignup == true ? <AuthSignin setSigninSignup={setSigninSignup} /> : <AuthSignup setSigninSignup={setSigninSignup} />
        }
        
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "} and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}
