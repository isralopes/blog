import styles from './Header.module.css'
import bola from '../image/bola.jpg'
import '../global.css'

export function Header() {
    return (
        <header className={styles.header}>
          <img src={bola} alt='imagem de bola'></img>
        </header>

    )
} 