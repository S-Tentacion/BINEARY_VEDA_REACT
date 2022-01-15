import { Box, chakra } from "@chakra-ui/react";
import React from "react";

const Content = ({ item }) => {
  return (
      <Box w={["400px","700px"]} className="content_box">
          <h1>{item.heading}</h1>
          <chakra.p>{item.content}</chakra.p>
      </Box>
  );
};
export default Content;
