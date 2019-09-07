import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // const course = 'Half Stack application development'
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14
    


    // const Header = (props) => {
    //     return (
    //         <div>
    //             <p>{props.course}</p>
    //         </div>   
    //     )      
    // }
   
    // const Part = (props) => {
    //     return (
    //         <div>
    //             <p>{props.part1} {props.exercises1}</p>
    //         </div>
    //     )
    // }
    // const Content = (props) =>{
    //     return (
    //         <div>
    //             <Part part1={part1} exercises1={exercises1} />
    //             <Part part1={part1} exercises1={exercises1} />
    //             <Part part1={part1} exercises1={exercises1} />
    //         </div>
    //     )
    // }
    // const Total = (props) => {
    //     return (
    //         <p>{props.total}</p>
    //     )
    // }
 
    const course = 'Half Stack application development'
    const parts = [
      {
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
      }
    ]
   // const total = part1.exercises1 + part2.exercises2 + part3.exercises3

    return (
        <div>
            {/* <Header course={course} />
            <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
            <Total total={total} /> */}
            <p>{course}</p>
            
            <p>{parts[0].name} {parts[0].exercises}</p>
            <p>{parts[1].name} {parts[1].exercises}</p>
            <p>{parts[2].name} {parts[2].exercises}</p>
            <p>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        </div>

    )

}

ReactDOM.render(<App />, document.getElementById('root'));


