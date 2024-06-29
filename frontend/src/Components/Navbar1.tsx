import { useState } from "react";
import siteLogo from "../assets/Nirey Shoes Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Flex, Box, Text, Image, Link, Button, Center } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const cartItems = [
  {
    image:
      "https://www.goldstarshoes.com/MediaThumb/medium/Media/g1305_white-1.jpg",
    name: "G10 G1305 White Goldstar Sneakers For Men",
    quantity: 2,
    price: 1800,
  },
  {
    image:
      "https://www.goldstarshoes.com/MediaThumb/medium/Media/New%20Folder_25/14-1.jpg",
    name: "Rock 06 White/Sky Goldstar Sneakers For Men",
    quantity: 1,
    price: 3050,
  },
];
const Nav = () => {
  return (
    <Box className="container-full bg-primary box-shadow-1">
      <Flex
        justifyContent="space-between"
        className="container-full"
        alignItems="center"
        p={2}
      >
        <nav className="container-full">
          <Box display="flex" alignItems="center" className="navbar-wrapper">
            <div className="navbar-logo">
              <Image src={siteLogo} alt="site logo" className="brand-logo" />
            </div>
            <div className="navbar-nav">
              <ul className="navbar-menu">
                <li className="navbar-item">
                  <Link href="/" className="navbar-link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href="/products" className="navbar-link">
                    Products
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href="/about" className="navbar-link">
                    About
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href="/contact" className="navbar-link">
                    Contact
                  </Link>
                </li>
                <li className="navbar-item">
                  {/* search icon */}
                  <Menu>
                    <MenuButton
                     bg="none"
                      as={Button}
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "#FFDE59",
                      }}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title="Profile">
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Payments </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Help">
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </li>

                <li className="navbar-item">
                  {/* cart icon */}
                  <Menu>
                    <MenuButton
                     bg="none"
                      as={Button}
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "#FFDE59",
                      }}
                    >
                      🛒
                    </MenuButton>
                    <MenuList width="350px">
                      {cartItems.map((item, index) => (
                        <MenuItem key={index}>
                          <Flex align="center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              boxSize="50px"
                              mr={3}
                            />
                            <Box flex="1">
                              <Text className="cart-item-name">
                                {item.name}
                              </Text>
                              <Text>
                                {item.quantity} x Rs. {item.price} = Rs.
                                {item.quantity * item.price}
                              </Text>
                            </Box>
                          </Flex>
                        </MenuItem>
                      ))}
                      <Box p={3}>
                        <Button
                          width="100%"
                          backgroundColor="#FFDE59"
                          _hover={{ backgroundColor: "#FFD700" }}
                        >
                          Go to Cart
                        </Button>
                      </Box>
                    </MenuList>
                  </Menu>
                </li>
                <li className="navbar-item">
                  {/* user icon */}

                  <Menu>
                    <MenuButton
                    bg="none"
                      as={Button}
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "#FFDE59",
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title="Profile">
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Payments </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Help">
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </li>
              </ul>
            </div>
          </Box>
        </nav>
      </Flex>
    </Box>
  );
};
export default Nav;
