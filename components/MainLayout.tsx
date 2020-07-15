import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const MainLayout: React.FC<Props> = ({ children, title = 'Next App' }) => (
  <>
    <nav>
      <Head>
        <title>{title} | Example</title>
        <meta name="keywords" content="next,js,react"/>
        <meta name="description" content="Next JS Example"/>
        <meta charSet="utf8"/>
      </Head>
      <h1>Navigation</h1>
      <div>
        <Link href="/"><a>home</a></Link>
      </div>
      <div>
        <Link href="/about"><a>about</a></Link>
      </div>
      <div>
        <Link href="/posts"><a>posts</a></Link>
      </div>
    </nav>
    <main>
      {children}
    </main>

    <style jsx>{`
      h1 {
        color: white;
      }
    
      nav {
        position: fixed;
        height: 60px;
        left: 0;
        right: 0;
        background: darkblue;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      
      nav a {
        color: white;
        text-decoration: none;
      }
      
      main {
        margin-top: 60px;
        padding: 1rem;
      }
    `}</style>
  </>
)

export default MainLayout
