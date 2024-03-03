import { useState } from 'react'


const Filter = ({setFilterString}) => {
    const [inputValue, setInputValue] = useState('')


    return (
    <>
        <h2>Search</h2>
        <input 
            onChange={(event) => {
                setInputValue(event.target.value)
                setFilterString(event.target.value)
            }} 
            value={inputValue} 
            placeholder='Search contact' />
    </>
    )
}

export default Filter
