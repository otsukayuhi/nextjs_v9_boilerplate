import React from 'react'
import Head from 'next/head'
import { Global } from '@emotion/core'

import Meta, { MetaProps } from '../Meta'
import Header from '../Header'
import Contents from '../Contents'
import Footer from '../Footer'
import { baseStyle } from './style'

type LayoutProps = MetaProps

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
  description = 'This is the default description'
}) => (
  <>
    <Global styles={baseStyle} />
    <Head>
      <Meta title={title} description={description} />
    </Head>
    <Header text="header text" />
    <Contents {...{ children }} />
    <Footer text="footer text" />
  </>
)

export default Layout
