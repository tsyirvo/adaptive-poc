import styled from "styled-components"
import { variant } from "styled-system"

const Text = styled.div`
  ${variant({
    variants: {
      small: {
        p: 0,
        fontSize: 8,
      },
      normal: {
        p: 0,
        fontSize: 14,
      },
      title: {
        p: 0,
        pb: 15,
        fontSize: 25,
      },
    },
  })}
`
Text.defaultProps = {
  variant: "normal",
}

export default Text
