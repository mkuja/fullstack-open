import Course from "./Course"

const App = () => {
  const courses = [{
    course: 'Half Stack application development',
    id:1,
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Redux',
      exercises: 11
    }]
  },
  {
    course: 'Django',
    id: 2,
    parts: [{
      name: 'Models',
      exercises: 10
    },
    {
      name: 'Templates',
      exercises: 1
    },
    {
      name: 'Views',
      exercises: 14
    },
    {
      name: 'Forms',
      exercises: 11
    }]
  }
  ]

  return (
    <div>
      {courses.map(course => <Course course={course} key={course.id} />)}
    </div>
  )
}

console.log('App.jsx')

export default App
