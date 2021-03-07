import { useState } from 'react'
import styles from './Note.module.css'
import stylesNewNote from '../../NewNote/NewNote.module.css'

// Komentarz deweloperski:
// Edycja notatki musi zostac wyciągnięta do odrębnego komponentu

const Note = (props) => {
    const [showContent, setShowContent] = useState(true)
    const [editState, setEditState] = useState(false)
    const [title, setTile] = useState(props.title)
    const [content, setContent] = useState(props.body)

    const toggleContent = () => setShowContent(!showContent)
    const handleTitle = e => setTile(e.target.value)
    const handleContent = e => setContent(e.target.value)

    const handleEditNote = () => {
        const newNote = {
            id: props.id,
            title: title,
            body: content
        }
        props.onEdit(newNote)
        setEditState(false)
    }

    return (
        !editState ? (
        <section className={styles.wrapper}>
            <h2 onClick={toggleContent} className={styles.heading}>{props.title}</h2>
            { showContent && (
                <p className={styles.content}>{props.body}</p>
            )}
            <button onClick={() => setEditState(true)} className={`${styles.btn} ${styles.btnEdit}`}>Edytuj</button>
            <button onClick={props.onDelete} className={`${styles.btn} ${styles.btnDel}`}>Usuń</button>
        </section>
        ) : (
        <section className={styles.wrapper}>
            <input 
                className={stylesNewNote.heading}
                type='text'
                placeholder='Tytuł notatki'
                onChange={handleTitle}
                value={title} />
            <br />
            <textarea
                className={stylesNewNote.content}
                placeholder='Treść notatki'
                onChange={handleContent}
                value={content} >
            </textarea>
            <button className={stylesNewNote.btnAdd} onClick={handleEditNote}>Zapisz notatkę</button>
        </section>
        )
    )
}

export default Note