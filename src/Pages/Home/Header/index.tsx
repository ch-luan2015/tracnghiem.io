import React from "react";
import { Box, Heading, Flex, Text, Button, UnorderedList, ListItem } from "@chakra-ui/react";
import { TimeIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { HiPause } from "@react-icons/all-files/hi/HiPause";

const MenuItems = ({ children }: any) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props: any) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const pauseIcon = () => {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    );
  };
  return (
    <>
      {/* Top header */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white" {...props}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            TrNg.io
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box display={{ base: show ? "block" : "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" justifyContent="center" flexGrow={1}>
          <MenuItems>Trắc nghiệm nhanh</MenuItems>
          <MenuItems>Chế độ Dual</MenuItems>
          <MenuItems>Đáp án</MenuItems>
        </Box>

        <Box display={{ base: show ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
          <Button bg="transparent" border="1px">
            Đăng nhập
          </Button>
        </Box>
      </Flex>
      {/* Bottom Header */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="gray.50" color="blue.500" {...props}>
        <Flex align="center" mr={5}>
          <ArrowLeftIcon />
          <Heading as="h3" size="md" letterSpacing={"-.1rem"} ml={4}>
            Quay Lại Khóa Học
          </Heading>
        </Flex>

        <UnorderedList fontSize="xl" fontWeight="medium" styleType="none" d="flex" width={20} alignItems="center" justifyContent="center" flexGrow={1}>
          <ListItem>
            <TimeIcon />
          </ListItem>

          <ListItem ml={2}>00:</ListItem>
          <ListItem>15:</ListItem>
          <ListItem>00</ListItem>
        </UnorderedList>

        <Box display={{ base: show ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
          <Button border="1px" mr={4} rightIcon={<HiPause />} bg="gray.500" colorScheme="teal" variant="solid">
            Tạm dừng
          </Button>
          <Button border="1px" rightIcon={<ArrowRightIcon />} bg="blue.500" colorScheme="teal" variant="solid">
            Nộp bài
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
