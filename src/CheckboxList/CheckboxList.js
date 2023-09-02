import React, { useEffect } from "react"
import { useState } from "react";

export default function CheckboxList(props){
    const title = props.title
    const length = props.content.length
    const [taskListStatus, setTaskListStatus] = useState({
        checked : Array(length).fill(false),
        classes : Array(length).fill("list-element-content-non_strikethrough"),
        totalCounter : 0          
    })
    const [currentChoice, setCurrentChoice] = useState(0)

    const handleClick = (index) => {
        let v1 =taskListStatus.checked.map(
            (element, i) => ( i === index ) ? !element : element
        )
        let v2 = taskListStatus.classes.map(
            (element,i) => (taskListStatus.checked[i]) ? "list-element-content-strikethrough" : "list-element-content-non_strikethrough"
        )

        let v3 = taskListStatus.checked.filter(checked => checked === true).length
        setTaskListStatus({
            checked : [...v1],
            classes : [...v2],
            totalCounter : v3
        })
    }
    
    useEffect(() => {
        handleClick(currentChoice)
        console.log(currentChoice)
    },[currentChoice])
    let content = props.content.map(
        (element,i) => 
        <li className="list-element" key={i}>
            <button className={taskListStatus.classes[i]} onClick={() => setCurrentChoice(i)}>{element}</button>
        </li>
    )
    return(
        <div className="list-box">
            <h1 className="list-title">
                {title}
            </h1>
            <ul className="list-holder">
                {content}
            </ul>
            <progress max={length} value={taskListStatus.totalCounter}/>
        </div>
    )
}
