import React from "react";
import styles from './Home.module.css';


const Home = props => {

    const activeClass = props.activeClass;

    return <div className={`${styles.container} ${activeClass && styles.active}`}>
        Home Page Content
    </div>
}

export default Home;