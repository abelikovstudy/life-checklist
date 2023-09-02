import React, { useEffect, useState } from "react"

export default function CheckboxList(props){
    const title = props.title
    const length = props.content.length
    const [listStatus, setListStatus] = useState({
        checkedList : Array(length).fill(false),
        totalCount : 0
    })
    const content = props.content.map(
        (element,i) => 
        <li className="list-element" key={i}>
            <button className="list-element-content" style={{ textDecoration: listStatus.checkedList[i] ? "line-through" : "none"}} onClick={() => handleClick(i)}>{element}</button>
        </li>
    )
    const handleClick = (index) => {
        setListStatus({
            ...listStatus,
            checkedList : listStatus.checkedList.map((element, i) => (i === index) ? !element : element),
        })
    }


    useEffect(() => {
        setListStatus((prev) => ({
            ...prev,
            totalCount : listStatus.checkedList.filter((element) => element).length
        }))
    },[listStatus.checkedList,listStatus.totalCount])
    return(
        <div className="list-box">
            <h1 className="list-title">
                {title}
            </h1>
            <ul className="list-holder">
                {content}
            </ul>
            <progress value={listStatus.totalCount} max={length}/>
        </div>
    )
}
