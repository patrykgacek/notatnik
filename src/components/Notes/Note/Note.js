import styles from './Note.module.css'

const Note = ({id, title, body}) => (
    <section className={styles.wrapper} key={id}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.content}>{body}</p>
        <button className={`${styles.btn} ${styles.btnEdit}`}>Edytuj</button>
        <button className={`${styles.btn} ${styles.btnDel}`}>Usuń</button>
    </section>
)

export default Note