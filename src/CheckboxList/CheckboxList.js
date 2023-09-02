import React, { useEffect, useState } from "react"

export default function CheckboxList(props){
    const title = props.title
    const length = props.content.length
    const [checkedList, setCheckedList] = useState(Array(length).fill(false))
    const [totalCounter, setTotalCounter] = useState(0)
    const content = props.content.map(
        (element,i) => 
        <li className="list-element" key={i}>
            <button className="list-element-content" style={{ textDecoration: checkedList[i] ? "line-through" : "none"}} onClick={() => handleClick(i)}>{element}</button>
        </li>
    )
    const handleClick = (index) => {
        setCheckedList(checkedList.map((element, i) => (i === index) ? !element : element))
    }
    useEffect(() => {
        setTotalCounter(checkedList.filter((element) => element).length)
    },[checkedList,totalCounter])
    return(
        <div className="list-box">
            <h1 className="list-title">
                {title}
            </h1>
            <ul className="list-holder">
                {content}
            </ul>
            <progress value={totalCounter} max={length}/>
        </div>
    )
}
