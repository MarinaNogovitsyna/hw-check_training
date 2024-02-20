import React, { useState } from 'react'
import { Form } from './Form'
import { List } from './List'
import { Training } from '../ts/types';

export const Wrapper = () => {
    const [allTraining, setAllTraining] = useState<Training[]>([]);
    const [edit, setEdit] = useState<Training>({date: '', kilometers: ''});

    function addTraning (training: Training) {
        const newAllTraning = [...allTraining, training];
        setAllTraining(newAllTraning)
    };

    function editTraining (training: Training){
        setEdit(training)
    }
    

  return (
    <div className='wrapper'>
        <Form addTraning={addTraning} edit={edit}/>
        <List allTraining={allTraining} editTraining={editTraining}/>
    </div>
  )
}
