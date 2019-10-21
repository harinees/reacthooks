import React ,{useState,useEffect   } from 'react';

const Edituser = (props) => {

    const [user, setUser] = useState(props.currentUser)
    const handleInputChange = event => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
      }
      useEffect(() => {
        setUser(props.currentUser)
      }, [props])
    return(
                <div>
                    <h2> Edit Form </h2>
                    <hr />
                                <form className="ui form"  onSubmit={event => {
                                      event.preventDefault()

                                props.updateUser(user.uid, user)
                                }}>
                                        <div className="field">
                                            <label>First Name</label>
                                            <input type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleInputChange} />
                                        </div>
                                        <div className="field">
                                            <label>Last Name</label>
                                            <input type="text" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleInputChange} />
                                        </div>
                                        
                                        <button className="ui blue submit button"  >Update</button> &nbsp;
                                        <button onClick={() => props.setEditing(false)} className="ui grey submit button"> Cancel</button>
                                    </form>
            
        </div>
    )
}

export default Edituser;