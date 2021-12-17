import styles from '../styles/Home.module.css'
import style from '../styles/signup.module.css'
import Link from 'next/link'
import React, { Component} from 'react';

//SignUp page
class Signup extends Component {

  state = {
    Name:'',
    lastName:'',
    email:'',
    password:''
  }

  //on utilise handle change dans notre input pour mettre à jour notre state selon les valeurs tapper dans nos inputs
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  //la methode ou l'action sur button du formulaire pour faire le login si l'email et password sont correct il va generer une token 
  handleSubmit = event => {
    event.preventDefault();
    
    let collection={}
        collection.Name=this.state.Name
        collection.lastName=this.state.lastName
        collection.email=this.state.email
        collection.password=this.state.password
     
        //l'url du backend (notre API)
        var url= ' http://localhost:3003/user/SignUp';

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          })
      }).then(res => res.json())
      .catch(error => console.log('error : ', error))
      .then(response => console.log('Success:',response));
  }
  render(){
    return (
        <div>
            
            <div className={styles.card}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardtick }></div>
      <div className={styles.cardText}>
         <h2>Register</h2>
          <p>Browse and find what you need</p>
      </div> 
      </div>
      <Link href="/">
<div className={styles.cardIn}>
  <div className={styles.cardImageIn}></div>
  <div className={styles.cardText}>
    <h2>Sign In</h2>
    <p>Already have an account, then welcome back.</p>
  </div> 
</div>
</Link>
<form onSubmit={this.handleSubmit}>
<div >
  <input type="text" name="Name" className={style.inputFirstname} onChange={this.handleChange}  placeholder='First Name*'/>
</div>
<div >
  <input type="text" name="lastName" className={style.inputLastName} onChange={this.handleChange} placeholder='Last Name*'/>
</div>
<div >
  <input type="email" name="email" className={styles.inputMail} onChange={this.handleChange}  placeholder='Email*'/>
</div>
<div >
  <input type="password" name="password" className={styles.inputPassword} onChange={this.handleChange}  placeholder='Password*'/>
</div>
<div >
  <input type="submit"  className={styles.inputButton}  value="Submit"/>
</div>
</form>
        </div>
    );
}
}
export default Signup;