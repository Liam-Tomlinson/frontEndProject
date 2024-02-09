import React, { useState, useEffect } from 'react';
import { deleteComments } from '../../../utils/apiRequests';

const DeleteButton = ({comment_Id, setisDeleted}) =>
{
    
    const deleteClickHandler = (event) => {
        event.preventDefault()
        setisDeleted(true)
        deleteComments(comment_Id)
    }

    return <button style={{ backgroundColor: '#d42020', color: 'white' }} onClick={deleteClickHandler}>Delete</button>

}

export default DeleteButton

