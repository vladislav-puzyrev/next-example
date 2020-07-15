import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

export default function Post ({ posts }: any) {
  // const [posts, setPosts] = useState<any[]>([])
  //
  // useEffect(() => {
  //   async function load () {
  //     const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  //     const json = await response.json()
  //     setPosts(json)
  //   }
  //
  //   load()
  // }, [])

  return (
    <MainLayout>
      <Head>
        <title>Главная</title>
      </Head>
      <h1>Posts page</h1>
      <ul>
        {
          posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </MainLayout>
  )
}

// SSR Fetch
export async function getServerSideProps (context: GetServerSideProps) {
  const response = await fetch(`${process.env.API_URL}posts`)
  const posts = await response.json()

  return {
    props: { posts }
  }
}
