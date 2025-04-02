"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  appsMenu: [
    {
      groupName: "Apps",
      menus: [
        {
          title: "Dashboard",
          url: "#",
          icon: "bx bx-tachometer",
        },
        {
          title: "Playground",
          url: "#",
          icon: "bx bx-bar-chart-square",
          // isActive: true,
          items: [
            {
              title: "History",
              url: "#",
            },
            {
              title: "Starred",
              url: "#",
            },
            {
              title: "Settings",
              url: "#",
            },
          ],
        },
      ]
    },
    
    {
      groupName: "Modules",
      menus: [
        {
          title: "Assets",
          url: "#",
          icon: "bx bx-tachometer",
        },
        {
          title: "Playground",
          url: "#",
          icon: "bx bx-bar-chart-square",
          // isActive: true,
          items: [
            {
              title: "History",
              url: "#",
            },
            {
              title: "Starred",
              url: "#",
            },
            {
              title: "Settings",
              url: "#",
            },
          ],
        },
      ]
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: "bx bx-bar-chart-square",
    },
    {
      title: "Feedback",
      url: "#",
      icon: "bx bx-bar-chart-square",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <i className='bx bx-terminal text-lg' ></i>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Wedding's App</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <hr className="my-2" />
      <SidebarContent>
        {
          data.appsMenu.map((x, index) => {
            return <NavMain key={index} items={x} />
          })
        }
        <NavSecondary items={data.navSecondary} className="mt-auto py-2" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
