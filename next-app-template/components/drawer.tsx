"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  CommandInput,
  Icon,
} from "@fidely-ui/react"
import { FaGithub, FaHeart, FaXTwitter } from "react-icons/fa6"

import { navLinks } from "~/components/navbar"
import { ColorModeButton } from "~/components/color-mode-button"

interface DrawerProps {
  isOpen: boolean
  closeDrawer: () => void
  commandOpen?: () => void
}

export const Drawer = ({ isOpen, closeDrawer, commandOpen }: DrawerProps) => {
  const pathname = usePathname()

  useEffect(() => {
    closeDrawer()
  }, [pathname])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <Box
        css={{
          position: "fixed",
          inset: "0",
          bg: "black/55",
          backdropFilter: "blur(6px)",
          zIndex: 40,
        }}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <Box
        css={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "75%",
          maxWidth: "380px",
          height: "100%",
          bg: "bg.default",
          p: "24px",
          zIndex: 50,
          boxShadow: "xl",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: "translateX(0)",
          animation: "slideIn 0.25s ease-out",
        }}
      >
        {/* Top */}
        <Stack gap="6" colorPalette="gray">
          <Flex justify="flex-end">
            <CloseButton onClick={closeDrawer} />
          </Flex>

          {/* Search */}
          <CommandInput
            placeholder="Search..."
            bg="transparent"
            onOpen={commandOpen}
          />

          {/* Nav Links */}
          <Stack gap="5" mt="2">
            {navLinks.map(({ href, label }, index) => (
              <Text
                key={index}
                asChild
                fontSize="lg"
                fontWeight="medium"
                transition="color 0.2s ease"
                _hover={{ color: "fg.subtle" }}
                onClick={closeDrawer}
              >
                <Link href={href}>{label}</Link>
              </Text>
            ))}
          </Stack>
        </Stack>

        {/* Bottom Actions */}
        <Stack gap="5" colorPalette="gray">
          {/* Social + Theme */}
          <HStack gap="3">
            <IconButton asChild variant="ghost" aria-label="X">
              <Link
                href="https://x.com/FidelyUi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <FaXTwitter />
                </Icon>
              </Link>
            </IconButton>

            <IconButton asChild variant="ghost" aria-label="GitHub">
              <Link
                href="https://github.com/fidely-ui/fidely-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <FaGithub />
                </Icon>
              </Link>
            </IconButton>

            <ColorModeButton />
          </HStack>

          {/* Sponsor */}
          <Button
            asChild
            variant="subtle"
            onClick={closeDrawer}
          >
            <Link
              href="https://ko-fi.com/fidely_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon color="red.10">
                <FaHeart />
              </Icon>
              Sponsor
            </Link>
          </Button>
        </Stack>
      </Box>
    </>
  )
}
