import { useEffect, useState } from "react";
import LeaveTracker from ".";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import HeaderSection from "../Header";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "../Sidebar";

function LeaveSummary() {

  return (
      <>
        <LeaveTracker />
        <div className="flex justify-center h-[500] items-center text-wrap text-center">
          <p className="text-wrap">
            Update the <a href="" className="text-blue-400">Date of Joining</a> for this employee to display their leave information <br/> 
            and enable them to perform leave related actions.
          </p> 
        </div>
      </>
  );
}

function LeaveSummaryIndex() {
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
  
    return(
      <>
        <Layout>
          { width < 768 ? 
          <Layout>
            <Header className="h-14 p-0 bg-blue-900">
              <HeaderSection components={components}/>
            </Header>
            <Content><LeaveSummary /></Content>
          </Layout> :
            <Layout>
              <Sider breakpoint="md">
                <SidebarComponent />
              </Sider>
              <Layout>
                <Header className="h-14 p-0 bg-blue-900">
                  <HeaderSection components={components}/>
                </Header>
                <Content><LeaveSummary /></Content>
              </Layout>
            </Layout>}
        </Layout>
      </>
    )
}

export default LeaveSummaryIndex