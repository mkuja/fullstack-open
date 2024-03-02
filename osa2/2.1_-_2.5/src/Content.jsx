import Part from "./Part"


const Content = ({course}) => {

    const parts = course.parts.map(part => 
        <Part name={part.name} exercises={part.exercises} key={part.name} />);

    return (
        <div>
            {parts}
        </div>
    );
}

export default Content;
