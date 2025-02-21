
"use client";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { GoSidebarCollapse } from "react-icons/go";
import MenuBar from "./MenuBar";


export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <MenuBar openSidebar={setIsOpen} />

      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="" titleIcon={() => { }} />
        <Drawer.Items>
          <Sidebar aria-label="Default sidebar example" className="">
            <Sidebar.Logo img="/static/icons/logo.svg" imgAlt="logo">
              Sendora
            </Sidebar.Logo>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                  <Sidebar.Item href="#">Products</Sidebar.Item>
                  <Sidebar.Item href="#">Sales</Sidebar.Item>
                  <Sidebar.Item href="#">Refunds</Sidebar.Item>
                  <Sidebar.Item href="#">Shipping</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                  Kanban
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox} label="3">
                  Inbox
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiUser}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>

        </Drawer.Items>
      </Drawer>
    </>
  );
}
