import React ,{useState} from 'react';
import Adduser from './Adduser';
import Manageuser from './Manageuser';
import Edituser from './Edituser';

const App = () => {
    const userData = [
        {uid:1,firstname:"Harinee", lastname:"S"},
        {uid:2,firstname:"Yogan", lastname:"S"},
        {uid:3,firstname:"Shree", lastname:"S"}
    ]

    const [users,setUsers] = useState(userData);
    
    const addUser = user => {
        user.uid = users.length + 1
        setUsers([...users, user])
      }

    const deleteUser = uid => {
        setUsers(users.filter(user => user.uid !== uid))
      }

    const [editing, setEditing] = useState(false)
    
    
      const initialFormState = { uid: null, firstname: '', lastname: '' }

      const [currentUser, setCurrentUser] = useState(initialFormState)

      const editRow = user => {
        setEditing(true)
      
        setCurrentUser({ uid: user.uid, firstname: user.firstname, lastname: user.lastname })
      }
      const updateUser = (uid, updatedUser) => {
        setEditing(false)
      
        setUsers(users.map(user => (user.uid === uid ? updatedUser : user)))
      }
    return(

        <div className="ui celled grid">
                <div className="row">
                    <div className="eighteen wide column">
                       <h2>Manage User With Hooks</h2>
                    </div>
                    
                </div>

            
                <div className="row">
                    <div className="eighteen wide column">
                        <div className="ui placeholder segment">
                                <div className="ui two column very relaxed stackable grid">
                                 { editing ? ( 
                                 
                                    <div className="column">
                                    <Edituser  editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
                                    </div> 
                                    
                                    ) : (
                                    <div className="column">
                                          <Adduser addUser={addUser} />
                                    </div>
                                  
                                    )}



                                    <div className="middle aligned column">
                                      <Manageuser users={users} deleteUser={deleteUser} editRow={editRow}  />
                                    </div>
                                </div>
                                    <div className="ui vertical divider">
                                     -
                                    </div>
                        </div>
                    </div>
                </div>



        </div>
         
    )
}

export default App;

