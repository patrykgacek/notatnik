import { useState, useEffect } from 'react'
import Note from "./Note/Note"
import styles from './Notes.module.css'
//import devNotes from '../../devData/devNotes'
import NewNote from '../NewNote/NewNote'
import axios from '../../axios'

const apiPath = 'notes'

const Notes = () => {
    const [notes, setNotes] = useState([])

    const deleteNote = async id => {
        await axios.delete(apiPath + "/" + id)
        setNotes(notes.filter(note => note.id !== id))
    }
    
    const addNote = async newNote => {
        const res = await axios.post(apiPath, newNote)
        newNote = res.data;
        console.log(newNote);
        setNotes([newNote, ...notes])
    }

    const editNote = async newNote => {
        await axios.put(apiPath + "/" + newNote.id, {title:newNote.title, body:newNote.body})

        const index = notes.findIndex(note => note.id === newNote.id)
        if (index >= 0) {
            const newNotes = [...notes]
            newNotes[index] = newNote
            setNotes(newNotes)
        }

        console.log("Funkcjonalnosc wylaczona")
    }
    const fetchNotes = async () => {
        const res = await axios.get(apiPath)
        setNotes(res.data.Items)
        console.log(res.data.Items);
    }

    useEffect(() => {
        fetchNotes()    
    }, []);

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