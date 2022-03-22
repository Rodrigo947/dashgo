import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";

interface NavSectionProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

import { ActiveLink } from "../ActiveLink";

export function NavLink({ icon, children, href, ...rest }: NavSectionProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
