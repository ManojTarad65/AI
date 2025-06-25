import * as React from "react"
import { Github, Linkedin, MessagesSquare, Twitter } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"
import { FaTwitterSquare } from "react-icons/fa"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // we can change the slidebar from here 
  return (
    <>

    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
                <Link href="https://assistant-ui.com" target="_blank">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <MessagesSquare className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">🧠 Manoj&apos;s AI</span>
                  </div>
                </Link>
              </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ThreadList />
      </SidebarContent>
      
      <SidebarRail />
      <SidebarFooter>
        <SidebarMenu>
         
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-16 ">
              <Link href="https://www.linkedin.com/in/manoj-tarad-0b779625a" target="_blank">
                <div className="">
                  <Linkedin className="size-4" />
                </div>
              </Link>

              <Link href="https://github.com/manojtarad65/Ai" target="_blank">
                <div className="">
                  <Github className="size-4" />
                </div>
              </Link>
              <Link href="https://x.com/manojtarad1" target="_blank">
                <div className="">
                  <FaTwitterSquare className="size-4" />
                </div>
              </Link>
              </div>
            </SidebarMenuButton>
            
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </>
  )
}
