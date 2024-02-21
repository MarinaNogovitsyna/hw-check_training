import React, { FC, useEffect, useState } from 'react'
import { Training } from '../ts/types';

interface FormProps {
    addTraning: (training: Training) => void,
    edit: Training
}

export const Form: FC<FormProps> = ({addTraning, edit}) => {
    const initialState = {
        date: '',
        kilometers: ''
    }
    const [form, setForm] = useState(initialState);

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        console.log(form);
        
        e.preventDefault();
        if(isCorrectValue()){
            addTraning(form);
            setForm(initialState)
        }
    }

    function isCorrectValue () {
        if(form.date === '' || form.kilometers === ''){
            alert('Заполнены не все поля!');
            return false
        }
        if (isNaN(+form.kilometers)){
            alert('Некорректное значение!');
            return false;
        }
        return true;
    }

    useEffect(() => {
        setForm(edit);
    }, [edit]);

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Дата (ДД.ММ.ГГГГ)
            <input type='date' name='date' value={form.date} onChange={handleChange}/>
        </label>
        <label>
            Пройдено км
            <input type='text' name='kilometers' value={form.kilometers} onChange={handleChange}/>
        </label>
        <button type='submit' className='form__button'>ОК</button>
    </form>
  )
}
