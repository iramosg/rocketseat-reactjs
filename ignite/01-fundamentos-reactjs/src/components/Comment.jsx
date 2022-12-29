import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/iramosg.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Ramos</strong>
              <time dateTime='2022-29-12 15:00:00' title='29 de Dezembro às 15 horas'>Cerca de há 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>

          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </footer>
      </div>

    </div>
  )
}