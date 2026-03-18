import { FaGithub, FaHeart, FaXTwitter } from "react-icons/fa6"

import { Box, Flex, HStack, Stack } from "@styled-system/jsx"
import { IoMdClose } from "react-icons/io"
import { button, text } from "@styled-system/recipes"
import { css, cx } from "@styled-system/css"

import { iconButtonClass, navLinks } from "@/components/navbar"
import { ColorModeButton } from "@/components/color-mode-button"

interface DrawerProps {
  isOpen: boolean
  closeDrawer: () => void
}

export const Drawer = ({ isOpen, closeDrawer }: DrawerProps) => {
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
            <button
              onClick={closeDrawer}
              aria-label="Close"
              className={
                button({ variant: "ghost", size: "sm" })
              }
            >
              <IoMdClose />
            </button>
          </Flex>

          {/* Nav Links */}
          <Stack gap="5" mt="2">
            {navLinks.map(({ href, label }, index) => (
              <p
                key={index}
                onClick={closeDrawer}
              >
                <a
                  href={href}
                  className={cx(
                    text(),
                    css({
                      fontSize: "lg",
                      fontWeight: "medium",
                      transition: "color 0.2s ease",
                      _hover: {
                        color: "fg.subtle"
                      }
                    })
                  )}
                >
                  {label}
                </a>
              </p>
            ))}
          </Stack>
        </Stack>

        {/* Bottom Actions */}
        <Stack gap="5" colorPalette="gray">
          {/* Social + Theme */}
          <HStack gap="1">
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
          </HStack>

          {/* Sponsor */}
          <a
            href="https://ko-fi.com/fidely_ui"
            target="_blank"
            rel="noopener noreferrer"
            className={button({ variant: "subtle" })}
          >
            <FaHeart aria-hidden="true" className={css({ color: "red.10" })} />
            Sponsor
          </a>
        </Stack>
      </Box>
    </>
  )
}
