import React, { FC } from 'react'
import { Training } from '../ts/types';
import { MdModeEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface ItemProps {
    date: string,
    kilometers: string,
    id: string,
    deleteValue: (id: string) => void,
    editTraining: (training: Training) => void
}

export const Item: FC<ItemProps> = ({date, kilometers, id, deleteValue, editTraining}) => {
    function getDate (date: string){
        return `${date.slice(8)}.${date.slice(5, 7)}.${date.slice(0, 4)}`
    }

    function handleEdit (){
        deleteValue(id);
        editTraining({date, kilometers})
    }

  return (
    <div className='item'>
        <span>{getDate(date)}</span>
        <span>{kilometers}</span>
        <div className='item__buttons'>
            <MdModeEdit onClick={handleEdit}/>
            <IoMdClose onClick={() => deleteValue(id)}/>
        </div>
    </div>
  )
}
