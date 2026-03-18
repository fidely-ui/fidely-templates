import { useState } from "react"
import { FaBars, FaGithub, FaHeart, FaXTwitter } from "react-icons/fa6"

import { Box, Flex, HStack } from "@styled-system/jsx"
import { css, cx } from "@styled-system/css"
import { button, text, heading } from "@styled-system/recipes"

import { ColorModeButton } from "@/components/color-mode-button"
import { Drawer } from "@/components/drawer"

export const iconButtonClass = css({
  '& svg': {
    fontSize: '1.1em',
  },
  py: "0",
  px: "0"
})

export const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <Box as="nav" py="4">
      <Flex
        align="center"
        justify="space-between"
        width="90%"
        mx="auto"
      >
        {/* Desktop Nav */}
        <Flex gap="4" align="center">
          {/* Logo */}
          <h1
            className={cx(
              heading({ size: "xl" }),
              css({
                color: "colorPalette.default",
                fontWeight: "semibold"
              })
            )}>
            Acme
          </h1>

          <HStack
            gap="3.5"
            display={{ base: "none", lg: "flex" }}
            mt="1"
          >
            {navLinks.map(({ href, label }, index: number) => (
              <a
                href={href}
                key={index}
                className={cx(
                  text(),
                  css({
                    transition: "color 0.2s ease",
                    _hover: {
                      color: "fg.subtle"
                    }
                  })
                )}>
                {label}
              </a>
            ))}
          </HStack>
        </Flex>

        <Flex
          align="center"
          gap="1"
          display={{ base: "none", lg: "flex" }}
          colorPalette="gray"
        >
          <a
            href="https://x.com/FidelyUi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Account"
            className={cx(
              button({ variant: "ghost", size: "sm" }),
              iconButtonClass
            )}
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/fidely-ui/fidely-ui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className={cx(
              button({ variant: "ghost", size: "sm" }),
              iconButtonClass
            )}
          >
            <FaGithub />
          </a>

          <ColorModeButton />

          <a
            href="https://ko-fi.com/fidely_ui"
            target="_blank"
            rel="noopener noreferrer"
            className={button({ variant: "subtle" })}
          >
            <FaHeart aria-hidden="true" className={css({ color: "red.10" })} />
            Sponsor
          </a>
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ base: "block", lg: "none" }}>
          <button
            aria-label="Toggle Menu"
            onClick={toggleDrawer}
            className={cx(
              button({ size: "md", variant: "ghost" }),
              css({
                colorPalette: "gray",

              })
            )}
          >
              <FaBars />
          </button>
        </Box>
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
      />
    </Box>
  )
}

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
]
