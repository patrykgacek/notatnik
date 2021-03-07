import { useState } from 'react'
import Note from "./Note/Note"
import styles from './Notes.module.css'
import devNotes from '../../devData/devNotes'
import NewNote from '../NewNote/NewNote'

const makeid = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

const Notes = () => {
    const [notes, setNotes] = useState(devNotes)

    const deleteNote = id => setNotes(notes.filter(note => note.id !== id))
    const addNote = newNote => setNotes([{id:makeid(10), ...newNote}, ...notes])
    const editNote = newNote => {
        const index = notes.findIndex(note => note.id === newNote.id)
        if (index >= 0) {
            const newNotes = [...notes]
            newNotes[index] = newNote
            setNotes(newNotes)
        }
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <h1 className={styles.heading}>Notatnik</h1>
            </header>
            <NewNote onAdd={(note) => addNote(note)}/>
            <article>
                { notes.map( note =>
                    <Note {...note} 
                        key={note.id}
                        onDelete={() => deleteNote(note.id)}
                        onEdit={newNote => editNote(newNote)} />) }
            </article>
        </div>
    )
}

export default Notes