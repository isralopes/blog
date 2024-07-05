import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

    function handlecreateNewcoment() {

        event.preventDefault()

        /*  console.log(event.target.comment.value)
         const newCommentText = event.target.comment.value */

        setComments([...comments, newCommentText])
        setNewCommentText('')
        // event.target.comment.value = '';
    }

    function handleNewcomment() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInavlid () {
        event.target.setCustomValidity(' Esse campo é obrigatorio')
    }

    const deleteComent = (commentDelete) => {
        const cooentsWithoutDeeleteOne = comments.filter(comment => {
         return comment != commentDelete
        })
        setComments(cooentsWithoutDeeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>
                </div>
                {/* <time title= {publishedDateFormatted}  dateTime="2023-05-11 08:00:00">
              
                {datePublishNow}
                    </time> */}
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handlecreateNewcoment} className={styles.formCom}>
                <strong>Deixe seu comentario</strong>

                <textarea placeholder='Deixe um comentario'
                    name='comment'
                    onChange={handleNewcomment}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInavlid}
                                  />
                    
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComent={deleteComent} />
                })}
            </div>

        </article>
    )
}