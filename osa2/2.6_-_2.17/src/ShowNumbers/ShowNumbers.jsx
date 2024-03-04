import ShowNumber from './ShowNumber/ShowNumber';

const ShowNumbers = ({ contacts, setContacts, filterString }) => {
    console.log("contacts: ", contacts)
    const filtered = contacts.filter((person) => {
        return person.name.toLowerCase().includes(filterString.toLowerCase())
    })

    return (
        <>
            <h2>Numbers</h2>
            <ul>
            { filterString 
                ? filtered.map(person => <ShowNumber setContacts={setContacts} key={person.id} contact={person} />)
                : contacts.map(person => <ShowNumber setContacts={setContacts} key={person.id} contact={person} />)}
            </ul>
        </>
    )  
}

export default ShowNumbers
