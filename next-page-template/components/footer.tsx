import Link from "next/link"
import { Flex, Text } from "@fidely-ui/react"

export const Footer = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
    >
      <Text>
        Powered by

        <Text asChild ml="1" color="colorPalette.default">
          <Link 
            href="https://fidely-ui.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Fidely UI
          </Link>
        </Text>
      </Text>
    </Flex>
  );
}