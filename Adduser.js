import React , {useState} from 'react';

const Adduser = (props) =>  {
    
    const initialFormState = { uid: null, firstname: '', lastname: '' };
    const [user,setUser] = useState(initialFormState);

    const handleInputChange  = event => {
        const {name,value} = event.target
        setUser({...user, [name]:value});
    }



        return(
            
    <div>
        <h2> Add Form </h2>
                    <hr />
                           
          <form className="ui form" onSubmit={ event => { 
    event.preventDefault()
    if (!user.firstname || !user.lastname) return

    props.addUser(user)
    setUser(initialFormState)
  }}>
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleInputChange} />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleInputChange} />
                    </div>
                     
                    <button className="ui blue submit button" type="submit"  >Add New User</button>
                </form>
        
    </div>
      )
    }
 

export default Adduser;
