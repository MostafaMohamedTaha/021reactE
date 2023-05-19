import React from 'react'
import ReactMde from 'react-mde'
import Showdown from 'showdown'

const NoteEditor = ({curNote,updateNote}) => {
    const [selectedTab,setSelectedTab]=React.useState('write')
    const Converter=new Showdown.Converter({
        tables:true,
        simplifiedAutoLink:true,
        strikethrough:true,
        tasklist:true,
    })
    return (
        <div>
        <section>
        <ReactMde 
            value={curNote.body}
            onChange={updateNote}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={el=>Promise.resolve(Converter.makeHtml(el))}
        />
        </section>
        </div>
    )
}

export default NoteEditor
