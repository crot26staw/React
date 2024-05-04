import './index.scss';
import React from 'react';
import Item from '../Item';
import { addToodo } from '../../redux/slices/toodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Input from '../Input/Index';

function LeftWrapper() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.toodo.value);

    const [nameInput, setNameInput] = React.useState('')
    const [colorInput, setColorInput] = React.useState('');

    const handleColor = function (event) {
        setColorInput(event.target.value)
    }

    const handleName = function (event) {
        setNameInput(event.target.value)
    }

    const addData = function () {
        if (nameInput != '' && colorInput != '') {
            dispatch(addToodo({
                id: data.length + 1,
                name: nameInput,
                color: colorInput,
                lists: []
            }))
            setNameInput('')
        }
    }
    return (
        <div className="main__left">
            <ul className='main__lists'>
                {
                    data.map((item, idx) => {
                        return <Item key={item.id} {...item} idx={idx} />
                    })
                }
            </ul>
            <div className='main__add'>
                <Input value={nameInput} func={handleName} />
                <div>
                    <p>Выберите цвет</p>
                    <input type="color" onInput={handleColor} />
                </div>
                <Button func={addData} />
            </div>
        </div>
    )
}

export default LeftWrapper