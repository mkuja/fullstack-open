import { useState, useEffect } from 'react'
import AddPersonForm from './AddPersonForm/AddPersonForm'
import ShowNumbers from './ShowNumbers/ShowNumbers'
import Filter from './Filter/Filter'
import pbService from './services/phonebookServices.js'
import ShowMessage from './ShowMessage/ShowMessage'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterString, setFilterString] = useState('')

  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [stylez, setStylez] = useState("")

  useEffect(() => {
    pbService.getAllContacts()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {console.log('Error:', error)})
  }, [])

  const countdownShowMessage = (message) => {
    setMessage(message)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 5*1000)
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {showMessage ? <ShowMessage message={message} className={stylez} /> : null}
        <Filter setFilterString={setFilterString} />
      </div>
      <div>
        <AddPersonForm 
          persons={persons}
          setPersons={setPersons}
          countdownShowMsg={countdownShowMessage}
          setNotificationStyle={setStylez} />
        <ShowNumbers
          contacts={persons} 
          setContacts={setPersons} 
          filterString={filterString} />
      </div>
    </>
  )

}

export default App
