import { chakra } from "@chakra-ui/system";
import React,{useEffect,useState} from "react";
import SiteHeaderLayout from "./SiteheaderLayout"
import { throttle } from "lodash";

const SiteHeader= ({ logo, type }) => {
    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)

    //navbar scroll changeBackground function
    const changeBackground = () => {
      if (window.scrollY >= 150) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background of navbar
      window.addEventListener("scroll", throttle(changeBackground,300))
    },[changeBackground])
  
  return (
    <React.Fragment>
      <chakra.header
        display="flex"
        className={navbar? "xu-site-header":""}
        position="fixed"
        left="0"
        right="0"
        top="0"
        width="100%"
        zIndex="9"
        height="80px"
        shadow="md">
        <SiteHeaderLayout changeTheme={navbar}/>
      </chakra.header>
    </React.Fragment>
  );
};

export default SiteHeader;
