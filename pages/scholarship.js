import Head from 'next/head'
import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
import Layout from '../components/layout'
import Header from '../components/header'
// import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { getScholarshipPage } from '../lib/api'
import { data } from 'autoprefixer'

// export async function getStaticProps({ params, preview = false, previewData }) {
    export async function getStaticProps() {
  const data = await getScholarshipPage();
  return {
    props: {
      data
    },
  }
}

export default function scholarshipPage(props) {

  return (
    <>
      <Layout>
        <Head>
          <title>Scholarships - {CMS_NAME}</title>
        </Head>
        <Container>
        <Header />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{props.data.title}</h1>
            <div className="max-w-2xl mx-auto">
              <div className="post-body_content__1R6cU" dangerouslySetInnerHTML={{__html: props.data.content}} />
            </div>
        </Container>
      </Layout>
    </>
  )
}