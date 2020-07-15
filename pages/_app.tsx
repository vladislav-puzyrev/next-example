// @ts-ignore
import NextNprogress from 'nextjs-progressbar'
import '../styles/main.css'

export default function MyApp ({ Component, pageProps }: any) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps}/>
      {/*<style jsx global>{`*/}
      {/*  body {*/}
      {/*    font-family: 'Roboto', sans-serif;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </>
  )
}
