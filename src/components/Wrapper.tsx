import React, { useState } from 'react'
import { Form } from './Form'
import { List } from './List'
import { Training } from '../ts/types';

export const Wrapper = () => {
    const [allTraining, setAllTraining] = useState<Training[]>([]);
    const [edit, setEdit] = useState<Training>({date: '', kilometers: ''});

    function filterAndSumByDate(arr: Training[]): Training[] {
      const filteredObj: Training[] = arr.reduce((acc: Training[], cur: Training) => {
          const existingItem = acc.find(item => item.date === cur.date);
          if (existingItem) {
              existingItem.kilometers = String(Number(existingItem.kilometers) + Number(cur.kilometers));
          } else {
              acc.push({ date: cur.date, kilometers: cur.kilometers });
          }
          return acc;
      }, []);
  
      const sortedObj = filteredObj.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
      return sortedObj;
  }

  function deleteValue(id: string) {
      const updatedTrainings = filterAndSumByDate(allTraining.filter(training => training.date !== id));
      setAllTraining(updatedTrainings);
  }

    function addTraning (training: Training) {
        const newAllTraning = filterAndSumByDate([...allTraining, training]);
        setAllTraining(newAllTraning)
    };

    function editTraining (training: Training){
        setEdit(training)
    }
    

  return (
    <div className='wrapper'>
        <Form addTraning={addTraning} edit={edit}/>
        <List allTraining={allTraining} editTraining={editTraining} deleteValue={deleteValue}/>
    </div>
  )
}
