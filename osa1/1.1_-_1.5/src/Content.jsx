import Part from "./Part"


const Content = (props) => {

    const parts = props.parts.map(part => <Part name={part.name} exercises={part.exercises} />);

    return (
        <div>
            {parts}
        </div>
    );
}

export default Content;
