import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Header, Navbar, Results } from "../components"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar/>
      <Results/>
    </div>
  )
}

export default Home
