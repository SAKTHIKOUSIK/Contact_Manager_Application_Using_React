// import React from "react";
// import { Link } from "react-router-dom";

// class AddContact extends React.Component {
//     state={
//         name:"",
//         email:"",
//     };
//     add=(e)=>{
//         e.preventDefault();
//         if(this.state.name ==="" || this.state.email===""){
//             alert("All the field are mandatory!");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({name:"", email:""});
//     };
//     render() {
//         return (
//             <div className="ui main">
//             <h2> Add Contact</h2>
//             <form className="ui form" onSubmit={this.add}>
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

// export default AddContact;


import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const {addContactHandler} = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    addContactHandler({name, email});
    setEmail("");
    setName("");
    navigate("/");
  };
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
}

export default AddContact;
