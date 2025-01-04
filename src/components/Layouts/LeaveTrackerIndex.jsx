"use client"

import HeaderSection from "@/components/Header";
import "../../app/globals.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "@/components/Sidebar";
import {useEffect, useState } from "react";
import LeaveTracker from "@/components/LeaveTracker";

export default function LeaveTrackerIndex() {
  const[width, setWidth] = useState(window.innerWidth);
  const components = [
    {
      name: "My Data",
      link: ""
    },
    {
      name: "Team",
      link: ""
    },
    {
      name: "Holidays",
      link: ""
    }
  ];

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);

    return ()=>  window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <Layout>
      { width < 768 ? 
      <Layout>
        <Header className="h-14 p-0 bg-blue-900">
          <HeaderSection components={components} />
        </Header>
        <Content><LeaveTracker /></Content>
      </Layout> :
        <Layout>
          <Sider breakpoint="md">
            <SidebarComponent />
          </Sider>
          <Layout>
            <Header className="h-14 p-0 bg-blue-900">
              <HeaderSection components={components}/>
            </Header>
            <Content><LeaveTracker /></Content>
          </Layout>
        </Layout>}
    </Layout>
  );
}
