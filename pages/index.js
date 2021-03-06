
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
import React, { Component} from 'react';

//Login Page
class Home extends Component {


  state = {
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
        collection.email=this.state.email
        collection.password=this.state.password
     
        //l'url du backend (notre API)
        var url= ' http://localhost:3003/user/SignIn';



        //on va le traiter avec fetch        
        
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }),redirect: 'manual'
      }).then(res => res.json())
      .catch(error => console.log('error : ', error))
      .then(function(res){
        if (res.redirected) {
          window.location.href = res.urlAccueil;
      }

      });

  }

  //la partie HTML 
  render(){
  return (
    <div >
    <Link href="/signup">
    <div className={styles.card}>
      <div className={styles.cardImage}></div>
      
      <div className={styles.cardText}>
         <h2>Register</h2>
          <p>Browse and find what you need</p>
      </div> 
</div>
</Link>
<div className={styles.cardIn}>
  <div className={styles.cardImageIn}></div>
  <div className={styles.cardtick }></div>
  <div className={styles.cardText}>
    <h2>Sign In</h2>
    <p>Already have an account, then welcome back.</p>
  </div> 
</div>

<form onSubmit={this.handleSubmit}>
<div>
  <input type="email" name ="email" onChange={this.handleChange} className={styles.inputMail}  placeholder='Email*'/>
</div>
<div >
  <input type="password" name="password" className={styles.inputPassword} onChange={this.handleChange}  placeholder='Password*'/>
</div>
<div >
  <input type="submit" className={styles.inputButton}  value="Submit"/>
</div>
</form>
    </div>
  )
}
}
export default Home;
