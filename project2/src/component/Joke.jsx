import JokeData from '../utilities/JokeData'
import JokeItem from '../utilities/JokeItem'
import React from 'react'

const Joke = () => {
    const [show, setShow] = React.useState(JokeData)
    const [msg, setMsg] = React.useState([])
    const jokeEl = show.map(el => (

        <JokeItem
            key={el.id}
            idProp={el.id}
            textProp={el.text}
            graphProp={el.graph}
            showProp={el.showColor}
            toggleProp={() => toggle(el.showColor)}

        />
    )
    )
    function toggle(showProp) {
        setShow(el => {
            return el.map(showEl => {
                return showEl.showColor === showProp ? { ...showEl, showColor: !showEl.showColor } : showEl
            })
        })
    }
    return (
        <div>
            <div className='container'>
                {jokeEl}
                <div className="p-2 border-2 m-3 bg-teal-100 text-center w-3/12">{msg.length&& <h1>no of message = {msg.length}</h1>}</div>
            </div>
        </div>
    )
}

export default Joke