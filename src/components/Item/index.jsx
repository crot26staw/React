import { useDispatch } from "react-redux"
import { removeToodo } from "../../redux/slices/toodoSlice"
import { activeCat } from "../../redux/slices/toodoSlice";

function Item(props) {
    const dispatch = useDispatch();

    function removeItem () {
        dispatch(removeToodo(props.id))
    }

    function changeActive () {
        dispatch(activeCat(props.idx))
    }

    return (
        <li id={props.id} className='main__li'>
            <span style={{background: props.color}}></span>
            <p onClick={changeActive}>{props.name}</p>
            <span onClick={removeItem} className='main__li-delet'>&#10006;</span>
        </li>
    )
}

export default Item