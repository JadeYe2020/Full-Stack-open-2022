const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ course }) => {

  let sum = course.parts.reduce(
    (sum, part) => part.exercises + sum
    , 0)

  return (
    <p>
      <strong>total of {sum} exercises</strong>
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  )
}

export default Course