import Head from 'next/head'
import Header from '../components/Header'
import Feed from "../components/Feed"
import Modal from "../components/Modal"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Socialify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Feed/>
      <Modal/>
      {/* Headeer */}
      {/* Feed */}
      {/* Modal */}

    </div>
  )
}
