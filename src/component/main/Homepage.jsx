import React, { useState, useEffect } from "react";
import SiteHeader from "../Layout/Navbar";
import FirstImg from "../../assests/Images/illustration.png";
import SecondImg from "../../assests/Images/showcase.png";
import ThirdImg from "../../assests/Images/botbot.png";
import CardFirstImg from "../../assests/Images/apiTeam.png";
import CardSecondImg from "../../assests/Images/graphQL.png";
import CardThirdImg from "../../assests/Images/superchargeWorkflow.png";
import Banner from "./Banner";
import Content from "./Content";
import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import Card from "../../component/Layout/Card";
import Footer from "../../component/Layout/Footer";
import Todo from "../../component/Layout/Todo";
function HomePage() {
  const [isNotMobile] = useMediaQuery("(min-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const homepageData = [
    {
      type: "Banner",
      placement: 1,
      sort: 1,
      child: {
        heading: "Lets build the future of design, Now.",
        content:
          "Creating Amazing tools and integrations for 1 million users or customise Marvel for your team",
        primaryBtn: isNotMobile ? "Submit Your app" : "View the docs",
        secondaryBtn: isNotMobile ? "View API Docs" : "Manage your apps",
        img: FirstImg,
      },
    },
    {
      type: "Content",
      sort: 2,
      child: {
        heading: "Experience the freedom to build features, right away.",
        content:
          "You can now harness components of our platform and build powerful integration for our 2 million users.",
      },
    },
    {
      type: "Card",
      sort: 3,
      child: [
        {
          img: CardFirstImg,
          caption: "Dedicated API team",
          content:
            "Our team are availabel for user's questions via Slack Developer Community and Email.",
        },
        {
          img: CardSecondImg,
          caption: "Our API uses Graph QL",
          content:
            "No hnadling server side. Get many API's responses in a singel request",
        },
        {
          img: CardThirdImg,
          caption: "Supercharge your workflow",
          content:
            "Automatic workflow, integrate and analyse data and take MArvel to the next level",
        },
      ],
    },
    {
      type: "Banner",
      placement: isNotMobile ? 2 : 3,
      sort: 5,
      child: {
        heading: "Showcase your app in our integration directory.",
        placement: 2,
        content:
          "Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.",
        primaryBtn: "Become a partner",
        secondaryBtn: "View Integration",
        img: SecondImg,
      },
    },
    {
      type: "Banner",
      placement: isNotMobile ? 3 : 2,
      sort: 4,
      child: {
        heading: `${
          isNotMobile ? `A Slack-bot` : `BotBot - Slack bot`
        } for creating and managing prototypes.`,
        placement: 3,
        content:
          "Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.",
        primaryBtn: "Become a partner",
        secondaryBtn: "View Integration",
        img: ThirdImg,
      },
    },
  ];

  if (!isNotMobile) {
    homepageData.sort((a, b) => {
      return a.sort - b.sort;
    });
  }

  const _section = (data, idx) => {
    switch (data.type) {
      case "Banner": {
        if (data.placement === 1) {
          return (
            <Box mt={["150px", "250px"]} mb={"50px"}>
              <Banner item={data.child} backGrnd />
            </Box>
          );
        } else if (data.placement === 2) {
          return (
            <Box mt={["40px", "100px"]}>
              <Banner
                item={data.child}
                backGrnd={false}
                upBimg={!isNotMobile ? true : false}
                isMobile={!isNotMobile ? true : false}
              />
            </Box>
          );
        } else {
          return (
            <Box mt={["80px", "200px"]} mb={"100px"}>
              <Banner
                item={data.child}
                type={"leftImg"}
                backGrnd={false}
                isMobile={!isNotMobile ? true : false}
              />
            </Box>
          );
        }
      }
      case "Content": {
        return (
          <Box mt={["80px", "120px"]}>
            <Content item={data.child} />
          </Box>
        );
      }
      case "Card": {
        return (
          <Box
            mt={["80px", "80px"]}
            display={["inline-block", "flex"]}
            justifyContent={"center"}
            key={idx}
          >
            <Card items={data.child} />
          </Box>
        );
      }
    }
  };

  return (
      <div>
        <SiteHeader />
        {homepageData.map((data, index) => {
          return <div key={index}>{_section(data, index)}</div>;
        })}

        <Todo isOpen={isOpen} close={close}>
          <Button
            className="top_user"
            bg={"#008fb3"}
            color={"white"}
            mr={["5px", "20px"]}
            fontWeight={"bold"}
            p={["12px", "30px"]}
            mb={["15px", "0px"]}
            ml={["15px", "30px"]}
            _hover={{ backgroundColor: "none" }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {"Todo"}
          </Button>
        </Todo>
        <Footer />
      </div>
  );
}

export default HomePage;
