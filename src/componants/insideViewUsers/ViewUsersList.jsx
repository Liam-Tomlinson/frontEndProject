import React, { useState, useEffect } from 'react';
import { getUsers } from '../../../utils/apiRequests';
import UserListCard from './UserListCard';

const ViewUsersList = () => {

    // const [isLoading, setIsLoading] = useState(true)
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        getUsers()
        .then((results) => setUsersList(results.data.users))
     }, [])

     console.log(usersList) 


    return < > 
       <div className='div2'>
        {usersList.map((item) => {
            console.log(item)
            return <UserListCard item={item} key={item.username} />
        })}
    </div>
    </>
  

    // if(isLoading === true) return <p >Please wait while we contact the server and load your content. Please note that if the server has not been active for 15 minutes it may take upto 50 seconds for it to respond.</p>

};

export default ViewUsersList