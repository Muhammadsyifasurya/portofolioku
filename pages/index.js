import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RM | Front-End Developer</title>
        <meta name="description" content= "I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."/>
        <link rel="icon" href="/MyProfile.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
  )
}
