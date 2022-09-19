import { Box, ListItem, Link } from "@chakra-ui/react";
import { RiHomeSmileFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { itemLeft } from "../Styles/animate";

import { NavLink as RouterLink, useHistory } from "react-router-dom";
import linkCss from "../Styles/link";

interface ItemMenuProps {
  title: string;
  path: string;
}

export const ItemMenu = ({ title, path }: ItemMenuProps) => {
  const history = useHistory();

  return (
    <ListItem
      as={motion.li}
      variants={itemLeft}
      onClick={() => history.push(path)}
    >
      <Link as={RouterLink} to="/fitnessHome" sx={linkCss}>
        <Box as="span" fontSize="1.5rem">
          <RiHomeSmileFill />
        </Box>
        <span>{title}</span>
      </Link>
    </ListItem>
  );
};
