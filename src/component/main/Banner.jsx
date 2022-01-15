import { Box, Button, chakra, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Banner = ({ item, backGrnd, type, upBimg, isMobile }) => {
  return (
    <chakra.section
      display={["inline-block", "flex"]}
      justifyContent={"space-evenly"}
    >
      {type === "leftImg" || upBimg ? (
        <Image w={["100%", "50%"]} h={400} src={item.img} mt={["18px", null]} />
      ) : null}
      <Box
        className="containers"
        w={["100%", "550px"]}
        m={["0px", "35px"]}
        textAlign={["center", null]}
      >
        <chakra.p
          fontSize={["22px", "42px"]}
          fontWeight={"bold"}
          mt={[type === "leftImg" ? "15px" : null, null]}
        >
          {item.heading}
        </chakra.p>
        <chakra.p
          mt={"20px"}
          w={["400px", "520px"]}
          ml={["", "18px"]}
          textAlign={"center"}
          fontSize={["16px", "20px"]}
        >
          {item.content}
        </chakra.p>
        <Box
          display={isMobile ? "grid" : "flex"}
          mt={["22px", "32px"]}
          justifyContent={"center"}
          ml={["0px", "-10px"]}
        >
          <Button
            className="top_user"
            bg={backGrnd && "#008fb3"}
            color={backGrnd && "white"}
            mr={["5px", "20px"]}
            fontWeight={"bold"}
            p={["12px", "30px"]}
            mb={[isMobile ? "15px" : null, "0px"]}
            _hover={{ backgroundColor: "none" }}
          >
            {item.primaryBtn}
          </Button>
          <Button
            className="top_user"
            bg={!backGrnd ? "black" : "white"}
            color={!backGrnd && "white"}
            borderColor={!backGrnd && "white"}
            p={["12px", "30px"]}
            fontWeight={"bold"}
            _hover={{ backgroundColor: "none" }}
          >
            {item.secondaryBtn}
          </Button>
        </Box>
      </Box>
      {type !== "leftImg" && !upBimg ? (
        <Image w={["100%", "50%"]} h={400} src={item.img} mt={["18px", null]} />
      ) : null}
    </chakra.section>
  );
};
export default Banner;
