import { useState, useEffect } from 'react'
import AddPersonForm from './AddPersonForm/AddPersonForm'
import ShowNumbers from './ShowNumbers/ShowNumbers'
import Filter from './Filter/Filter'
import pbService from './services/phonebookServices.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    pbService.getAllContacts()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {console.log('Error:', error)})
  }, [])

  return (
    <>
      <div>
        <Filter setFilterString={setFilterString} />
      </div>
      <div>
        <AddPersonForm persons={persons} setPersons={setPersons} />
        <h2>Phonebook</h2>
        <ShowNumbers contacts={persons} setContacts={setPersons} filterString={filterString} />
      </div>
    </>
  )

}

export default App
