import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${process.env.APPS_NAME || "Weeds-App"} | Dashboard`,
};

export default function Page() {
  return (
    <div>
      Welcome to my app
    </div>
  )
}