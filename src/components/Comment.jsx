import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComent }) {

    const [likeCont,setlikeCont] = useState(0)
   
    const handleDelete = () => {
        onDeleteComent(content)
    }

    function handleLikeComment () {
        setlikeCont(likeCont + 1)
    } 

    return (
        <div className={styles.comment}>
            <Avatar hasborder={false} src='https://github.com/isralopes.png' alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorandTime}>
                            <strong>Israel Lopes</strong>
                            <time title='salvo as 11:03' dateTime='2023-05-11 08:00'>Publicado há 1h</time>
                        </div>


                        <button onClick={handleDelete} title='Deletar Comentario'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCont}</span>
                   </button>
                </footer>
            </div>
        </div>
    );
};