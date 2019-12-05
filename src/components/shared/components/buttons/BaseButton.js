import React, { useCallback } from "react"

const BaseButton = ({ onClick, children }) => {
  const onClickFunc = useCallback(() => onClick(), [onClick])

  return <button onClick={onClickFunc}>{children}</button>
}

export default BaseButton
