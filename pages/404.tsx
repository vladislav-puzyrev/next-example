import MainLayout from '../components/MainLayout'
import Link from 'next/link'
import classes from '../styles/errorPage.module.scss'

export default function ErrorPage () {
  return (
    <MainLayout title="Home page">
      <h1 className={classes.error}>Error 404</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </MainLayout>
  )
}
