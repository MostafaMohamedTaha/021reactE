import NoteEditor from '../utilities/noteItem/NoteEditor'
import NoteSidebar from '../utilities/noteItem/NoteSidebar'
import React from 'react'
import Split from 'react-split'
import {nanoid} from 'nanoid'

// import NoteData from '../utilities/noteItem/NoteData'





const Note = () => {
    const[note,setNote]=React.useState([])
    const [curNoteId,setCurNoteId]=React.useState((note[0]&&note[0].id)||'')
    function createNewNote() {
        const newNote={id:nanoid(),body:'type your text'}
        setNote(el=>[newNote,...el])
        setCurNoteId(newNote.id) 
    }
    function updateNote(text) {
        setNote(el=>el.map(elNote=>{
            return elNote.id===curNoteId?{...elNote,body:text}:elNote
        }))
    }
    function findCurNote() {
        return note.find(el=>{
            return el.id===curNoteId
        })||note[0]
    }
    return (
        <div>
        {note.length>=0
        ?
        <Split sizes={[30,70]} direction='horizontal'>
            <NoteSidebar 
                note={note}
                curNote={findCurNote()}
                setCurNoteId={setCurNoteId}
                newNote={createNewNote}
            />
            {
                curNoteId&&note.length>0&&<NoteEditor 
                    curNote={findCurNote()}
                    updateNote={updateNote}
                
                />
            }
        </Split>:'hi'
        }
        </div>
    )
}

export default Note

