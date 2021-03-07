import { useState } from 'react'
import noteStyles from '../Notes/Note/Note.module.css'
import styles from './NewNote.module.css'

const NewNote = (props) => {
    const [title, setTile] = useState('')
    const [content, setContent] = useState('')
    const [showForm, setShowForm] = useState(false)

    const handleTitle = e => setTile(e.target.value)
    const handleContent = e => setContent(e.target.value)

    const handleAddNote = () => {
        const newNote = {
            title: title,
            body: content
        }
        props.onAdd(newNote)
        setTile('')
        setContent('')
        setShowForm(false)
    }

    return (
        showForm ? (
        <section className={noteStyles.wrapper}>
            <input 
                className={styles.heading}
                type='text'
                placeholder='Tytuł notatki'
                onChange={handleTitle}
                value={title} />
            <br />
            <textarea
                className={styles.content}
                placeholder='Treść notatki'
                onChange={handleContent}
                value={content} >
            </textarea>
            <button className={styles.btnAdd} onClick={handleAddNote}>Dodaj notatkę</button>
        </section>
        ) : (
            <button className={styles.btnAdd} onClick={() => setShowForm(true)}>Nowa Notatka</button>
        )
    )
}

export default NewNote;