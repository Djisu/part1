import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const total = exercises1 + exercises2 + exercises3


    const Header = (props) => {
        return (
            <div>
                <p>{props.course}</p>
            </div>   
        )      
    }
   
    const Part = (props) => {
        return (
            <div>
                <p>{props.part1} {props.exercises1}</p>
            </div>
        )
    }
    const Content = (props) =>{
        return (
            <div>
                <Part part1={part1} exercises1={exercises1} />
                <Part part1={part1} exercises1={exercises1} />
                <Part part1={part1} exercises1={exercises1} />
            </div>
        )
    }
    const Total = (props) => {
        return (
            <p>{props.total}</p>
        )
    }
 
    return (
        <div>
            <Header course={course} />
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            <Total total={total} />
        </div>

    )

}

ReactDOM.render(<App />, document.getElementById('root'));


