import React, { useState } from 'react';
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = ({id: userId}) => {
        setUsers(users.filter(user => user._id !== userId));
        
        };
        
    const renderPhrase = () => {
      if (users.length > 4 || users.length === 1)
      return (
        <span className="badge bg-primary">
          {users.length} человек тусанет с тобой сегодня
        </span>
      )
    if (users.length < 5 && users.length > 1)
      return (
        <span className="badge bg-primary">
          {users.length} человека тусанут с тобой сегодня
        </span>
      )
    if (users.length === 0)
      return <span className="badge bg-danger">Никто с тобой не тусанет</span>
      
    }
   
    const classes = "badge m-1 bg-"
    return(
     
      
        <table className="table" key={users._id}>
              
                <thead>
                  {renderPhrase()}
           <tr>
             <th scope="col">Имя</th>
             <th scope="col">Качества</th>
             <th scope="col">Профессия</th>
             <th scope="col">Встретился, раз</th>
             <th scope="col">Оценка</th>
             <th scope="col"></th>
           </tr>
               </thead>
               {users.map((user) => (
               <tbody id={user._id} key={user._id}>
           <tr>
             <td>{user.name}</td>
             <td>{user.qualities.map((qual) => <span className={classes +qual.color}>{qual.name}</span> )} </td>
             <td>{user.profession.name}</td>
             <td>{user.completedMeetings}</td>
             <td>{user.rate}/5</td>
             <td><button onClick={() => handleDelete({id: user._id})} className="btn btn-danger">Удалить</button></td>
           </tr>

              </tbody>
               ))}
        </table>
    ); 
}
 
export default Users;
  // return users.length > 4 || users.length === 1 ? (
        //   <span className="badge bg-primary">
        //     {users.length} человек тусанет с тобой сегодня  
        //   </span>
        // ) : (
        //   <span className="badge bg-primary">
        //     {users.length} человека тусанут с тобой сегодня
        //   </span>
        // );
        // // return users.length === 0 ? <span className="badge bg-danger">
        // //   никто с тобой не тусанет
        // // </span>