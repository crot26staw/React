import React from "react"
import { useSelector} from "react-redux"

function RightWrapper() {
    const data = useSelector(state => state.done.value);

    return (
        <div className="main__right">
            <p className='main__right-title'>Выполнено</p>
            <ul className="main__done">
                {data.map((item, idx) =>{
                    return <li key={idx} style={{color: item.color}} className="item">{item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default RightWrapper