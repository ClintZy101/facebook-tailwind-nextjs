import { getSession } from 'next-auth/client';
import Head from 'next/head'
import { db } from '../../firebase';
import Body from '../components/Body'
import Header from '../components/Header'
import Login from '../components/Login';
// import Sidebar from '../components/Sidebar'


export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Facebook Clone Next</title>
      </Head>
      <Header />
      <Body posts={posts}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  // pre-fetch the server before it enters the browser, to make the app load faster
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp:null
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}