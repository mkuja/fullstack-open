
const Content = (props) => {

    const parts = props.parts.map(part => <p>{part.name} {part.exercises}</p>);

    return (
        <div>
            {parts}
        </div>
    );
}

export default Content;
