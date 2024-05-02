'use client'

import styles from "./index.module.css";

import {useState} from "react";

const Navbar =  ()=>{

    const [toggle,setToggle] = useState(1);

    const image = toggle ? <img src="https://th.bing.com/th/id/OIP.Z0-dmUI_HKY37zBGCEns1AHaD8?rs=1&pid=ImgDetMain"/>: <img src="https://th.bing.com/th/id/OIP.MvR8H4voNgN7Ej9WWRO8tgHaHa?rs=1&pid=ImgDetMain"/>
   

    return(
    <div className={styles.container}>

        <div className={styles.img_con}>
            <img  src="https://preettech.com/wp-content/uploads/2022/08/cropped-Preet-tech-1-1-1-1.png"/>
        </div>
        <div className={styles.nav_items}>
            <div>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li><span>BLOGS</span></li>
            </ul>
            </div>
            <div className={styles.button_con}>
                <button>GROW NOW</button>
            </div>
        </div>
        <div className={styles.toggle}>
            <div className={styles.logo_con} onClick={()=>{
                setToggle(!toggle);
            }}>
                {image}
            </div>

           

        </div>
            {toggle?null:
        <div className={styles.toggle_nav}>
            <ul>
                <li>About Us<hr/></li>
                <li>Contact Us<hr/></li>
                <li>Privacy Policy<hr/></li>
                <li>Blogs</li>
            </ul>
            
        </div>
}
    </div>
    )
}

export default Navbar;