import React, { FC, useEffect, useState } from 'react'
import { Training } from '../ts/types'
import { Item } from './Item';

interface ListProps {
    allTraining: Training[],
    editTraining: (training: Training) => void
}

export const List: FC<ListProps> = ({allTraining, editTraining}) => {
    const [filteredTrainings, setFilteredTrainings] = useState<Training[]>([]);

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
        const updatedTrainings = filteredTrainings.filter(training => training.date !== id);
        setFilteredTrainings(updatedTrainings);
    }

    useEffect(() => {
        setFilteredTrainings(filterAndSumByDate(allTraining));
    }, [allTraining]);


  return (
    <div className='list'>
        <div className='list__names'>
            <span>Дата (ДД.ММ.ГГГГ)</span>
            <span>Пройдено км</span>
            <span>Действия</span>
        </div>
        <div className='list__items'>
            {filteredTrainings.map(el => (
                <Item 
                    date={el.date} 
                    kilometers={el.kilometers} 
                    key={el.date} 
                    id={el.date} 
                    deleteValue={deleteValue}
                    editTraining={editTraining}
                />
            ))}
        </div>
    </div>
  )
}