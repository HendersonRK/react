import styles from "./Comment.module.css"

export function Comment(props) {
    return(
        <div className={styles.comment}>
            <span>{props.comentario}</span>
        </div>
    )
}