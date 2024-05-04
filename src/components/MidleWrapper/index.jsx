import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addList } from '../../redux/slices/toodoSlice';
import MiniItem from '../MiniItem';
import Button from '../Button';
import Input from '../Input/Index';

function MidleWrapper() {
    const dispatch = useDispatch();

    const data = useSelector(state => state.toodo.value);
    const activeItem = useSelector(state => state.toodo.activeItem);

    const [secondInput, setSecondInput] = React.useState('');

    const handleSubName = function (event) {
        setSecondInput(event.target.value)
    }

    const addToodoItem = function () {
        if (secondInput != '') {
            dispatch(addList({
                id: data[activeItem].lists.length + 1,
                idx: activeItem,
                value: secondInput
            }))
            setSecondInput('')
        }
    }
    return (
        <div className='main__middle'>
            {
                data[activeItem] && <>
                    <p className='main__middle-title' style={{ color: data[activeItem].color }}>{data[activeItem].name}</p>
                    <ul className='main__lists'>
                        {data[activeItem].lists.map((item, idx) => {
                            return <MiniItem key={idx} {...item} id={item.id} catId={data[activeItem].id} color={data[activeItem].color} />
                        })}
                    </ul>
                    <div className='main__add'>
                        <Input value={secondInput} func={handleSubName} />
                        <Button func={addToodoItem} />
                    </div>
                </>
            }
        </div>
    )
}

export default MidleWrapper