// import React from 'react'
import Head from 'next/head'
import Nav from '../components/appComponents/nav'
import Tab from '../components/appComponents/tabs'

const Home = () => (
  <div>
    <Head>
      <title key="title">Safety Management System</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </Head>

    <Nav />
    <Tab />
  </div>
)

export default Home
