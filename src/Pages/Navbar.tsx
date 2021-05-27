import { Box, Flex, Text } from "@chakra-ui/react";


export function Navbar() {
  return (
    <Box overflowX="hidden" mb="2rem" className="glass-effect-nav">
      <Flex
        justify="flex-start"
        align="center"
        minH={"20px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        bfeImage
      >
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Box>
          <Text p="1rem" fontSize="lg" fontWeight="bold">
            Q--Fit
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
