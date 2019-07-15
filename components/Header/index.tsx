import React from 'react'
import { HeaderStyle } from './style'

interface HeaderProps {
  text: string
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <HeaderStyle>{text}</HeaderStyle>
}

export default Header
