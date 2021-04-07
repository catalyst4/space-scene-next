import Head from 'next/head'

export function getServerSideProps () {

  return {
    redirect: {
      destination: '/starship',
      permanent: false
    }
  }

}

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Scene</title>
      </Head>
    </>
  )
}
