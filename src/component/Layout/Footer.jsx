import { chakra, Image } from "@chakra-ui/react";
import FooterImg from "../../assests/Images/logo-white.svg";
import React from "react";
import { Box } from "@chakra-ui/react";
import { SimpleGrid, useMediaQuery } from "@chakra-ui/react";

const Footer = () => {
  const [isNotMobile] = useMediaQuery("(min-width: 767px)");
  const ary = [
    {
      title: "Overview",
      child: [
        "Why Marvel",
        "Enterprise",
        "Pricing",
        "Request a demo",
        "Explore",
        "Apps",
        "Developer API",
      ],
    },
    {
      title: "Features",
      child: [
        "WireFraming",
        "Design",
        "Prototyping",
        "Collaboration",
        "Handoff",
        "integrations",
        "Sketch Plugin",
      ],
    },
    {
      title: "Support",
      child: ["Help Center", "Terms of Service", "Privacy", "Security"],
    },
    {
      title: "Marvel",
      child: [
        "Blog",
        "Our Team",
        "Contact Us",
        "Success Stories",
        "Brand Guidelines",
      ],
    },
    {
      title: "Follow",
      child: ["Twitter", "Dribble", "Facebook", "Github", "Workable"],
    },
  ];
  return (
    <chakra.footer m={"15px"} mb={"100px"}>
      {!isNotMobile ? (
        <Box>
          <Image
            src={FooterImg}
            alt="footer_img"
            w={20}
            h={20}
            mb={"30px"}
            ml={"0px"}
            loading="lazy"
          />
        </Box>
      ) : null}
      <SimpleGrid columns={[2, null, 6]} spacing="40px">
        {isNotMobile ? (
          <Box>
            <Image
              src={FooterImg}
              alt="footer_img"
              w={20}
              h={20}
              loading="lazy"
              ml={"35px"}
            />
          </Box>
        ) : null}
        <>
          {ary.map((item, id) => (
            <Box key={id}>
              <chakra.span>
                <h2>{item.title}</h2>
              </chakra.span>
              {item.child.map((child, idx) => (
                <Box
                  key={idx}
                  m={"5px"}
                  fontSize={"18px"}
                  color={"grey"}
                  _hover={{ color: "white" }}
                  cursor={"pointer"}
                >
                  <span>{child}</span>
                </Box>
              ))}
            </Box>
          ))}
        </>
      </SimpleGrid>
    </chakra.footer>
  );
};

export default Footer;
