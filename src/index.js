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

    const Header = ({course}) => {
        return (
            <div>
                <p>{course}</p>
            </div>   
        )      
    }
   
   
    const Content = ({parts}) =>{
        return (
            <div>
                <p>{parts[0].name} {parts[0].exercises}</p>
                <p>{parts[1].name} {parts[1].exercises}</p>
                <p>{parts[2].name} {parts[2].exercises}</p>
            </div>
        )
    }
    const Total = (props) => {
        return (
            <p>{parts[0].exercises +parts[1].exercises + parts[2].exercises}</p>
        )
    }
 
    
   // const total = part1.exercises1 + part2.exercises2 + part3.exercises3

    return (
        <div>
               <div>
                    <Header course={course} />
                    <Content parts={parts}  />
                    <Total parts={parts} />
               </div>
           
        </div>

    )

}

ReactDOM.render(<App />, document.getElementById('root'));


