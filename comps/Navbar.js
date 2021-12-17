import styles from '../styles/Home.module.css'

const Navbar = () =>{
    return(
        <nav>
            <div>
                <a className={styles.Home}>Home</a>
                <a className={styles.Aboutus} > About us</a>
                <a className={styles.contactus} > Contact us</a>
            </div>
        </nav>
    );
}

export default Navbar;