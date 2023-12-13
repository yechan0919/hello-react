import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text: 'snow'},
        {id:2, text: 'man'},
        {id:3, text: 'three'},
        {id:4, text: 'four'},
    ])

    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(names.length + 1)

    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1)
        setNames(nextNames)
        setInputText('')
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames)
    }

    const test = () => {
        console.log('test')
    }

    const nameList = names.map( (name) =>
        <li key={name.id}
            onDoubleClick={ () => onRemove(name.id)}
        >
            {name.text}
        </li>
    )

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )

};

export default IterationSample;