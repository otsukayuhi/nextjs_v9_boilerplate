import React from 'react'
import Link from 'next/link'
import { HeaderStyle } from './style'

interface HeaderProps {
  text: string
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{'トップ'}</a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a>{'About'}</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>{text}</div>
    </HeaderStyle>
  )
}

export default Header
