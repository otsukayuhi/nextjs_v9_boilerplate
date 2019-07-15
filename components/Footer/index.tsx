import React from 'react'
import { FooterStyle } from './style'

interface FooterProps {
  text: string
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return <FooterStyle>{text}</FooterStyle>
}

export default Footer
