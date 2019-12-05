import React, { useCallback } from "react"

import BaseButton from "../buttons/BaseButton"

const TabBarIcon = ({ Icon, label, onClick }) => {
  const onClickFunc = useCallback(() => onClick(), [onClick])

  return (
    <BaseButton onClick={onClickFunc}>
      <Icon />
      <p>{label}</p>
    </BaseButton>
  )
}

export default TabBarIcon
