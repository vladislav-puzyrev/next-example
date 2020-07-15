import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

export default function Index () {
  const homeLinkHandler = () => Router.push('/')
  const postsLinkHandler = () => Router.push('/posts')

  return (
    <MainLayout>
      <h1>About page</h1>
      <button onClick={homeLinkHandler}>Back to home</button>
      <button onClick={postsLinkHandler}>Back to posts</button>
    </MainLayout>
  )
}
