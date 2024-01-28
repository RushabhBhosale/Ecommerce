import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Meta = () => {
  return (
    <>
      <Head>
        <title>EpicStore</title>
      </Head>
      <Link rel='icon' type='image/x-icon' href='/favicon.ico' />
    </>
  )
}

export default Meta