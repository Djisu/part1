import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course  = {
      name: 'Half Stack application development',
      parts: [
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
        },
      ]
    }
  
    const Header = (props) => {
       // console.log(type of course)
        return (
            <p>
                {props.name}
            </p>
        )
    }

    const Content = (props) => {  
        return (          
            <ul>
                <li>{props.name0} {props.exercises0}</li><br />
                <li>{props.name1} {props.exercises1}</li><br />
                <li>{props.name2} {props.exercises2}</li><br />
            </ul>
        )
    }

    const Total = (props) => {       
        return (
           <p>            
              {props.exercises0 + props.exercises1 + props.exercises2}
           </p> 
        )
    }

    
    return (    
    <div>
        
        <Header name={course.name} />
        <Content  name0={course.parts[0].name}  exercises0={course.parts[0].exercises} 
                  name1={course.parts[1].name}  exercises1={course.parts[1].exercises}
                  name2={course.parts[2].name}  exercises2={course.parts[2].exercises} 
        />
        <Total exercises0={course.parts[0].exercises} exercises1={course.parts[1].exercises}  exercises2={course.parts[2].exercises} />
    </div>
    )
  }
ReactDOM.render(<App />, document.getElementById('root'));


