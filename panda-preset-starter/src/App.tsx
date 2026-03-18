import { FaGithub } from "react-icons/fa6"

import { css, cx } from "@styled-system/css"
import { Box, Center, Flex, Stack } from "@styled-system/jsx"
import { avatar, button, group, heading, text } from "@styled-system/recipes"
import { getInitials } from "@/util/get-initial"

function Avatars({ users }: { users: typeof persons }) {
  const avatarClass = avatar({ size: "md", shape: "full" })
  const showFallback = false

  return (
    <div className={group({ overlap: true })}>
      {users.map((user, index) => (
        <div key={index} className={avatarClass.root}>
          {showFallback ? (
            <div className={avatarClass.fallback}>
              {getInitials(user.name)}
            </div>
          ) : (
            <img
              src={user.img}
              alt={user.name}
              className={avatarClass.image}
            />
          )}
        </div>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <Box
      as="section"
      position="relative"
      height="auto"
    >
      <Center height="85vh">
        <Stack gap="6" textAlign="center" maxWidth="900px">
          <h2
            className={cx(
              heading(),
              css({
                fontWeight: "semibold",
                lineHeight: "1.4em",
                fontSize: "4xl",
                md: { fontSize: "5xl" },
                lg: { fontSize: "6xl" }
              })
            )}
          >
            Build{" "}
            <span className={cx(
              text(),
              css({ color: "colorPalette.default" })
            )}
            >
              modern
            </span>{" "}
            apps with speed and flexibility
          </h2>
          <p
            className={css({
              color: "fg.muted",
              fontSize: "md",
              lg: { fontSize: "xl" }
            })
            }
          >
            Bring Fidely styles to your projects using preset powered design tokens and recipes
          </p>

          <Center my="2">
            <Flex gap="2">
              <Avatars users={persons}  />

              <Stack textAlign="left" gap="0">
                <p className={
                  cx(
                    text({ size: "sm" }),
                    css({ color: "fg.default", fontWeight: "semibold" })
                  )
                }
                >
                  12k
                </p>
                <p className={
                  cx(
                    text({ size: "xs" }),
                    css({ color: "fg.muted" })
                  )
                }
                >
                  Used and loved by this lovely community
                </p>
              </Stack>
            </Flex>
          </Center>

          <Flex justify="center" gap={4} flexDirection={{ base: "column", md: "row" }}>
            <a
              href="https://fidely-ui.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={button({ size: "lg" })}
            >
              Documentation
            </a>

            <a
              href="https://github.com/fidely-ui/fidely-ui"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(
                button({ size: "lg", variant: "outline" }),
                css({
                  colorPalette: "gray"
                }))}
            >
              Github <FaGithub />
            </a>
          </Flex>
          <Center mt="3">
            <Box
              p="2.5"
              rounded="s2"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="border.disabled"
            >
              <p
                className={text()}
              >
                Get started by editing{" "}
                <span className={css({
                  ml: "1.5",
                  bg: "colorPalette.5",
                  p: "1.5",
                  rounded: "s2"
                })
                }
                >
                  src/App.tsx
                </span>
              </p>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}

export default App

const persons = [
  {
    name: "John Doe",
    img: "http://bit.ly/43kBcJt"
  },
  {
    name: "Emma Liam",
    img: "http://bit.ly/47jPX1D"
  },
  {
    name: "Helo Sabi",
    img: "https://rb.gy/39f8mx"
  }
]