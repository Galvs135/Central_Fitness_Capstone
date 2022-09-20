import { Box, ListItem, Link } from "@chakra-ui/react";
import { RiHomeSmileFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { itemLeft } from "../Styles/animate";

import { NavLink as RouterLink } from "react-router-dom";
import linkCss from "../Styles/link";

interface ItemMenuProps {
  title: string;
  path: string;
}

export const ItemMenu = ({ title, path }: ItemMenuProps) => {
  return (
    <ListItem as={motion.li} variants={itemLeft}>
      <Link as={RouterLink} to={path} sx={linkCss}>
        <Box as="span" fontSize="1.5rem">
          <RiHomeSmileFill />
        </Box>
        <span>{title}</span>
      </Link>
    </ListItem>
  );
};
