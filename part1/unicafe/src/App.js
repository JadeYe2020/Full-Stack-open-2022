import {useState} from 'react';

const Section = ({title}) => <h1>{title}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>)
} 

const Statistics = (props) => {
  let totalCount = props.good + props.bad + props.neutral;

  if (totalCount === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  let average = (props.good - props.bad) / totalCount;
  let positiveRate = (props.good / totalCount * 100).toString() + " %";

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={totalCount} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positiveRate} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const chooseGood = () => setGood(good + 1)
  const chooseNeutral = () => setNeutral(neutral + 1)
  const chooseBad = () => setBad(bad + 1)

  return (
    <div>
      <Section title="give feedback" />
      <Button handleClick={chooseGood} text="good" />
      <Button handleClick={chooseNeutral} text="neutral" />
      <Button handleClick={chooseBad} text="bad" />
      <Section title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;