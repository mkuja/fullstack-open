import './ShowMessage.css'


const ShowMessage = ({ className, message }) => {
    return (
        <div className={`message ${className}`}>
            {message}
        </div>
  )
}

export default ShowMessage
