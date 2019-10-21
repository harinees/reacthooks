import React from 'react';
 
const Manageuser =  (props) => {
     
        
        return(
            <div>
                <h3>Manage User</h3>
                    <table className="ui padded table">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th colSpan="2"  className="left aligned">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { props.users.length > 0 ? (
                                props.users.map(user => (
                            <tr key={user.uid}>
                                <td data-label="id">{user.uid}</td>
                                <td data-label="firstname">{user.firstname}</td>
                                <td data-label="lastname">{user.lastname}</td>
                                <td data-label="Action"  >
                                    
                                    <button className="ui yellow button"  onClick={() => {props.editRow(user) }}>Edit</button>     
                                </td>
                                <td data-label="Action"  >
                                    
                                     <button className="ui red button" onClick={()=> props.deleteUser(user.uid)}>Delete</button>    
                                </td>
                            </tr>
                                ))               
                            ):(
                             <tr>
                                 <td colSpan={3}>No users</td>
                            </tr>
                           )}  
                        </tbody>
                    </table>
            </div>
        );
    }
 

export default Manageuser;