import React, { useState } from 'react'
import { Form } from './Form'
import { List } from './List'
import { Training } from '../ts/types';

export const Wrapper = () => {
    const [allTraining, setAllTraining] = useState<Training[]>([]);

    function addTraning (training: Training) {
        const newAllTraning = [...allTraining, training];
        setAllTraining(newAllTraning)
    };
    

  return (
    <div className='wrapper'>
        <Form addTraning={addTraning}/>
        <List allTraining={allTraining}/>
    </div>
  )
}
