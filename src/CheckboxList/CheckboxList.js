import React from "react"
import { useState, useEffect} from "react";

export default function CheckboxList(props){
    const title = props.title
    const length = props.content.length
    const [taskCounter, setTaskCounter] = useState(0)
    const [checkedList, setCheckedList] = useState(
        new Array(length).fill(false)
    );
    const handleClick = (index) => {
        setTaskCounter(taskCounter + 1)
        setCheckedList(
            checkedList.map(
                (element, i) => {
                    return (index === i) ? !element : element
                }
            )
        )
        console.log(checkedList)
    }

    const content = props.content.map(
        (person,key) => 
        <li className="list-element" key={key}>
            <button className="list-element-content" onClick={() => handleClick(key)}>{person}</button>
        </li>
    )
    useEffect(() => {
        checkedList.forEach((el,i) => {
            (el === true) ? content[i].props.className = "list-element-content-strikethrough"  : content[i].props.className = "list-element-content-non_strikethrough" 
        })
    },checkedList)
    return(
        <div className="list-box">
            <h1 className="list-title">
                {title}
            </h1>
            <ul className="list-holder">
                {content}
            </ul>
            <progress max={length} value={taskCounter}/>
            
        </div>
    )
}
