import Note from "./Note/Note"
import styles from './Notes.module.css'
import notes from '../../devData/devNotes'

const Notes = () => (
    <div className={styles.wrapper}>
        <header>
            <h1 className={styles.heading}>Notatnik</h1>
        </header>
        <article>
            { notes.map( note => <Note {...note} />) }
        </article>
    </div>
)

export default Notes