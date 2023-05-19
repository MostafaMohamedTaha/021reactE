import React from 'react'

const NoteSidebar = ({note,curNote,setCurNoteId,newNote}) => {
    const noteEl=note.map((el,index)=>{
        <div key={el.id}>
            <div className={`${el.id===curNote.id?'text-3xl bg-teal-900 text-seal-100':''}`} onClick={()=>setCurNoteId(el.id)}>
              <h4>{index+1}</h4>
            </div>
        </div>
    })
  return (
    <div>
      <button onClick={newNote}>+</button>
      {noteEl}
    </div>
  )
}

export default NoteSidebar
