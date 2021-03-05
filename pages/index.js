import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-800 text-gray-200 flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>VogelCodes.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          @VogelCodes
        </h1>

        <p className="mt-3 text-2xl">
          Descomplicando a Programação
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
          VogelCodes.com - 2021
      </footer>
    </div>
  )
}
