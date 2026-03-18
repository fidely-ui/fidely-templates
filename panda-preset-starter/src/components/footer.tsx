import { Flex } from "@styled-system/jsx"
import { css, cx } from "@styled-system/css"
import { text } from "@styled-system/recipes"

export const Footer = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
    >
      <p className={text()}>
        Powered by

        <a
          href="https://fidely-ui.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(
            text(),
            css({
              color: "colorPalette.default",
              ml: "1"
            })
          ) 
        }
        >
          Fidely UI presets
        </a>
      </p>
    </Flex>
  );
}