import Link from "next/link"
import { Box, Button, Center, Heading, Stack, Text, Flex } from "@fidely-ui/react"
import { FaGithub } from "react-icons/fa6"

import DefaultLayout from "~/layouts/default-layout"

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Box
          as="section"
          position="relative"
          height="auto"
        >
          <Center height="85vh">
            <Stack gap="6" textAlign="center" maxWidth="900px">
              <Heading size={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="semibold" lineHeight="1.4em">
                Build <Text as="span" color="colorPalette.default"> modern</Text> apps with speed and flexibility
              </Heading>
              <Text fontSize={{ base: "md", lg: "xl" }} color="fg.muted">
                UI library for modern React apps
              </Text>
              <Flex justify="center" gap={4} flexDirection={{ base: "column", md: "row" }}>
                <Button size="lg" asChild>
                  <Link href="https://fidely-ui.vercel.app" target="_blank" rel="noopener noreferrer">
                    Documentation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  colorPalette="gray"
                  asChild
                >
                  <Link href="https://github.com/fidely-ui/fidely-ui" target="_blank" rel="noopener noreferrer">
                    Github <FaGithub />
                  </Link>
                </Button>
              </Flex>
              <Center mt="3">
                <Box
                  p="2.5"
                  rounded="s2"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="border.disabled"
                >
                  <Text>Get started by editing <Text as="span" ml="1.5" bg="colorPalette.5" p="1.5" rounded="s2">page/index.tsx</Text> </Text>
                </Box>
              </Center>
            </Stack>
          </Center>
        </Box>
      </DefaultLayout>
    </>
  );
}
