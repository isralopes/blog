import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function SideBar() {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
           
            <div className={styles.profile}>
              <Avatar src='https://github.com/isralopes.png' />

                <strong> Israel Lopes</strong>
                <span> Web Developes</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}