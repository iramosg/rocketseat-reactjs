import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Igor Ramos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, earum nulla incidunt fugit nemo quam nostrum eveniet explicabo voluptatem facilis, assumenda suscipit doloremque cum dicta culpa omnis modi inventore ex!"
        />
        </main>
      </div>
    </div>
   
  )
}

