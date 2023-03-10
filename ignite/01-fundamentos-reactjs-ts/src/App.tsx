import { Header } from "./components/Header"
import { Content, Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'



interface Post extends PostProps {
  id: number
  content: Content[]
}


const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/iramosg.png",
      name: "Igor Ramos",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-31 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/iramosg.png",
      name: "Teste UsuΓ‘rio",
      role: "UX Designer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-01 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/iramosg.png",
      name: "Maria Teste",
      role: "QA"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-02-01 20:00:00')
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </div>
   
  )
}

