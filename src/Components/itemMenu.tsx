import { Box, ListItem, Link } from "@chakra-ui/react";
import { RiHomeSmileFill } from "react-icons/ri";
import { GiMuscleUp } from "react-icons/gi";
import { SiMicrosoftteams } from "react-icons/si";
import { BiFoodMenu } from "react-icons/bi";

import { motion } from "framer-motion";
import { itemLeft } from "../Styles/animate";

import { NavLink as RouterLink } from "react-router-dom";
import linkCss from "../Styles/link";

interface ItemMenuProps {
  title: string;
  path: string;
  icon?: string;
}

export const ItemMenu = ({ title, path, icon }: ItemMenuProps) => {
  return (
    <ListItem as={motion.li} variants={itemLeft}>
      <Link as={RouterLink} to={path} sx={linkCss}>
        <Box as="span" fontSize="1.5rem">
          {icon === "home" ? (
            <RiHomeSmileFill />
          ) : icon === "training" ? (
            <GiMuscleUp />
          ) : icon === "team" ? (
            <SiMicrosoftteams />
          ) : (
            <BiFoodMenu />
          )}
        </Box>
        <span>{title}</span>
      </Link>
    </ListItem>
  );
};
