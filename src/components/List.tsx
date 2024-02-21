import React, { FC, useEffect, useState } from 'react'
import { Training } from '../ts/types'
import { Item } from './Item';

interface ListProps {
    allTraining: Training[],
    editTraining: (training: Training) => void,
    deleteValue: (id: string) => void
}

export const List: FC<ListProps> = ({allTraining, editTraining, deleteValue}) => {
  return (
    <div className='list'>
        <div className='list__names'>
            <span>Дата (ДД.ММ.ГГГГ)</span>
            <span>Пройдено км</span>
            <span>Действия</span>
        </div>
        <div className='list__items'>
            {allTraining.map(el => (
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