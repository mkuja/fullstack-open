import { useState } from 'react'
import './AddPersonForm.css'
import pbService from '../services/phonebookServices.js'

const AddPersonForm = ({
    persons, 
    setPersons, 
    countdownShowMsg, 
    setNotificationStyle}) => {
    
    // State for the name input field.
    const [newName, setNewName] = useState('')
    // State for the phone input field.
    const [newPhone, setNewPhone] = useState('')

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const nn = newName
        const np = newPhone

        if (persons.find(person => person.name === newName)) { // Update branch.
            const updateOrNah = window.confirm(`${newName} is already added to phonebook, replace the old number?`) 
            if (!updateOrNah) return null
            // Update contact to db.
            pbService.updateContact(
                persons.find(person => person.name === newName).id, 
                {name: newName, number: newPhone}
            ).then(response => {
                // Get all contacts from the server.
                pbService.getAllContacts()
                    .then(response => {
                        console.log('response:', response)
                        setPersons(response.data)
                    }).catch(error => {console.log('Error:', error)
            })}).catch(error => {console.log('Error:', error)
                countdownShowMsg(`Error ${error.code}: Contact doesn't exist anymore.`)
            })
            setNotificationStyle("update")
            countdownShowMsg(`Contact '${nn}' updated.`)} else {
            pbService.createContact({name: nn, number: np})
                    .then(response => {
                        setPersons(persons.concat(response.data))
                    })
                    .catch(error => {console.log('Error:', error)})
            setNotificationStyle("add")
            countdownShowMsg(`Contact '${nn}' added.`)
            setNewName('')
            setNewPhone('')   
        }
    }
    const handleChangePhone = (event) => {
        if (event.target.value.match(/^[0-9+ ]*$/)) {
            setNewPhone(event.target.value)

        } else {
            alert('Phone number must contain only digits, spaces and +')
        }
    }

    return (
        <form className='new-contact' onSubmit={handleSubmitForm}>
            <div>
                <input 
                    name="name" 
                    onChange={(ev) => setNewName(ev.target.value)} 
                    value={newName} 
                    placeholder='Enter contact' />
                <input
                    name="phone"
                    placeholder='Enter new phone number' 
                    onChange={handleChangePhone}
                    value={newPhone} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPersonForm
