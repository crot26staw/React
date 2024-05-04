import './index.scss'
import { useDispatch } from 'react-redux'
import { removeList } from '../../redux/slices/toodoSlice'
import { addDone } from '../../redux/slices/doneSlice';

function MiniItem(props) {
    const dispatch = useDispatch();

    const deleteList = function () {
        dispatch(removeList(props.id));
    }

    const doneList = function () {
        dispatch(addDone({
            catId: props.catId,
            id: props.id,
            title: props.value,
            color: props.color
        }))
        dispatch(removeList(props.id));
    }

    return (
        <li className='item' style={{ color: props.color }}>
            {props.value}
            <div className='item__wrapp'>
                <span onClick={doneList} className='item__done'>&#10004;</span>
                <span onClick={deleteList} className='item__delete'>+</span>
            </div>
        </li>
    )
}

export default MiniItem