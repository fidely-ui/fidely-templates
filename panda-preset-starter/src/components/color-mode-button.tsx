import { useTheme } from "next-themes"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5"

import { button } from "@styled-system/recipes"
import { css, cx } from "@styled-system/css"

import { iconButtonClass } from "@/components/navbar"

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const title = theme === "light" ? "Switch to dark mode" : "Switch to light mode"

  return (
    <button
      onClick={handleToggleTheme}
      aria-label={title}
      title={title}
      className={cx(
        button({ variant: "ghost", size: "sm" }),
        css({ colorPalette: "gray", color: "inherit" }),
        iconButtonClass
      )}
    >
      {theme === "light" ? (
        <IoSunnyOutline size="17px" aria-hidden="true" aria-label="Switch Theme Mode" />
      ) : (
        <FaMoon size="17px" aria-hidden="true" aria-label="Switch Theme Mode" />
      )}
    </button>
  )
}
