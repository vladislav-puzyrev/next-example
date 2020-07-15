import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Post ({ post }: any) {
  const router = useRouter()

  // Лог будет и на сервере и на клиенте
  // console.log(router)
  return (
    post ? <>
      <h1>Post id - "{router.query.id}"</h1>
      <pre>{JSON.stringify(post)}</pre>
      <div>{post.title}</div>
      <Link href="/posts">
        <a>Back to posts</a>
      </Link>
    </> : 'Загрузка...'
  )
}

export async function getServerSideProps (context: any) {
  const response = await fetch(`${process.env.API_URL}posts/${context.params.id}`)
  const post = await response.json()

  return {
    props: { post }
  }
}
