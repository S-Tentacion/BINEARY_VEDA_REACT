import { Image, chakra, Flex, Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import HeaderImg from "../../assests/Images/logo-white.svg";
import BlackHeaderImg from "../../assests/Images/logo-black.svg";
import Menu from "../../assests/Images/white_menu.svg";
import DarkMenu from "../../assests/Images/menu.svg";
const SiteHeaderLayout = ({ changeTheme }) => {
  const [isNotMobile] = useMediaQuery("(min-width: 767px)");
  return (
    <React.Fragment>
      <Box w={"100%"}>
        <chakra.div h="full" className="topbar" m={"15"} mt={["0px", null]}>
          <Box
            cursor="pointer"
            className="logo d-flex"
            ml={["0px", "55px"]}
            alignItems={"center"}
          >
            <Image
              src={changeTheme ? BlackHeaderImg : HeaderImg}
              alt="Header"
              w={["70px !important", "120px"]}
              h={["60px !important", "100px"]}
              loading="lazy"
            />
            <chakra.span
              fontWeight={"bold"}
              ml={["10px", "15px"]}
              mr={"10px"}
              mt={"-17px"}
              color={changeTheme && "black"}
            >
              {" "}
              |{" "}
            </chakra.span>
            <chakra.p
              fontSize={["18px", "22px"]}
              color={changeTheme && "black"}
            >
              {" "}
              Developers
            </chakra.p>
          </Box>
          <chakra.div w={["auto", "100%"]} alignItems="center">
            {isNotMobile ? (
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                {["WhyMarvel", "Enterprise", "Pricing", "Sign In"].map(
                  (item, index) => {
                    return (
                      <>
                        <Box
                          key={index}
                          color="white"
                          p={"3"}
                          m={"10"}
                          cursor={"pointer"}
                          color={changeTheme && "black"}
                          fontSize={["12px", "22px"]}
                        >
                          {item}
                        </Box>
                      </>
                    );
                  }
                )}
                <Box
                  _hover={{
                    bg: "white",
                  }}
                  p={"12px"}
                  w={"200px"}
                  className="top_user"
                >
                  <chakra.span color="Black !important" fontSize={"22px"}>
                    {"Sign up free"}
                  </chakra.span>
                </Box>
              </Box>
            ) : (
              <>
                <Image
                  src={changeTheme ? DarkMenu : Menu}
                  alt="Header"
                  w={10}
                  h={10}
                  loading="lazy"
                />
              </>
            )}
          </chakra.div>
        </chakra.div>
      </Box>
    </React.Fragment>
  );
};

export default SiteHeaderLayout;
