import {
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Avatar,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useEffect, useState } from "react";


export const SendoraLogo = () => {
  return (
    <svg width="30px" height="30px" viewBox="-1.92 -1.92 51.84 51.84" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="1.6320000000000001" transform="rotate(-45)">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <defs>
          {/* <style>.a{fill:#8354d1;stroke:#8354d1;stroke-linecap:round;stroke-linejoin:round;}</style> */}
        </defs>
        <path class="a" d="M41.01,28.7576l2.2684-3.929a1.6573,1.6573,0,0,0,0-1.6572L34.3566,7.719a1.6571,1.6571,0,0,0-1.4351-.8285H16.9921A1.657,1.657,0,0,0,15.557,9.3762L24,24l4.3373-7.5124a1.657,1.657,0,0,1,1.4352-.8286H36.07a1.6572,1.6572,0,0,1,1.4352,2.4857L32.335,27.1A1.6572,1.6572,0,0,0,33.77,29.5862h5.8043A1.6572,1.6572,0,0,0,41.01,28.7576Z" />
        <path class="a" d="M6.99,19.2424,4.722,23.1714a1.6573,1.6573,0,0,0,0,1.6572L13.6434,40.281a1.6571,1.6571,0,0,0,1.4351.8285H31.0079a1.657,1.657,0,0,0,1.4351-2.4857L24,24l-4.3373,7.5124a1.657,1.657,0,0,1-1.4352.8286H11.93a1.6572,1.6572,0,0,1-1.4352-2.4857L15.665,20.9A1.6572,1.6572,0,0,0,14.23,18.4138H8.4255A1.6572,1.6572,0,0,0,6.99,19.2424Z" />
      </g>
    </svg>
  );
};

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}
    
    classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-primary",
      ],
    }}
    className='bg-gray-100'
    shouldHideOnScroll isBlurred>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SendoraLogo />
          <p className="font-bold text-inherit">Sendora</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="page" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-primary w-75 overflow-hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );

}
