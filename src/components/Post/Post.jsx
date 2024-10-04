import styles from './Post.module.css';

import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';


export function Post({ author, authorRole, publishedAt, avatarUrl, conteudo, conteudoUrl, tags}) {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleComments = () => {
        event.preventDefault();
        setComments([...comments, comment])
        console.log(comment);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>{authorRole}</span>
                    </div>
                </div>

                <time>{publishedAt}</time>
            </header>

            <div className={styles.content}>
                <p>{conteudo}</p>
                
                <p>
                    <a href="#"> {conteudoUrl} </a>
                </p>
                <p>
                    <a href="#">{tags}</a>
                </p>
            </div>

            <form className={styles.commentForm} onSubmit={handleComments}>
                <strong>Deixe seu Comentário</strong>
                <textarea
                    value={comment} 
                    onChange={(event) => setComment(event.target.value)}
                    name="comment" 
                    placeholder='Deixe seu comentário'
                    required
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            {comments.map((comentario) => (
                <Comment comentario={comentario}/>
            ))}
        </article>        
    );
}