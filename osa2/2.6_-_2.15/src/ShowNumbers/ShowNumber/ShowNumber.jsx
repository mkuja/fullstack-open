import pbService from '../../services/phonebookServices.js'
import './ShowNumber.css'

const ShowNumber = ({ contact, setContacts }) => {
    return (
        <li className='contact-number'>
            {contact.name}, {contact.number}
            <button onClick={(ev) => {
                pbService.deleteContact(contact.id)
                    .then(response => {
                        console.log('Deleted: ', response)
                        pbService.getAllContacts().then(response => {
                            setContacts(response.data)
                        })
                    }
            )}}>Delete</button>
        </li>
    )
}

console.log('ShowNumber')
export default ShowNumber
