// import React from "react";
// import { Link } from "react-router-dom";

// class EditContact extends React.Component {
//     constructor(props){
//         super(props);
//         const{id,name,email}=props.location.state.contact;
//         this.state={
//             id,
//             name,
//             email,
//         };
//     }
    
//     update=(e)=>{
//         e.preventDefault();
//         if(this.state.name ==="" || this.state.email===""){
//             alert("All the field are mandatory!");
//             return;
//         }
//         this.props.updateContactHandler(this.state);
//         this.setState({name:"", email:""});
//     };
//     render() {
//         return (
//             <div className="ui main">
//             <h2> Edit Contact</h2>
//             <form className="ui form" onSubmit={this.update}>
//                 <div className="field">
//                     <label> Name </label>
//                     <input type="text" name="name" placeholder="Name"
//                     value={this.state.name}
//                     onChange={(e)=>this.setState({name:e.target.value})}/>
//                 </div>
//                 <div className="field">
//                     <label> Email </label>
//                     <input type="text" name="email" placeholder="Email"
//                     value={this.state.email}
//                     onChange={(e)=>this.setState({email:e.target.value})}/>
//                 </div>
//                 <button className="ui button blue">Add</button>

//                 <Link to='/'>
//                     <button className="ui button blue center">
//                         Back to Contact List
//                     </button>
//                 </Link>
                
//             </form>
//         </div>
//         );
//     }
// }

// export default EditContact;


import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () =>  {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [newEmail, setNewEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const {updateContactHandler} = useContactsCrud();
  

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    updateContactHandler({id, name: newName, email : newEmail});
    setNewName("");
    setNewEmail("")
    navigate("/");
  };

    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
}

export default EditContact;
