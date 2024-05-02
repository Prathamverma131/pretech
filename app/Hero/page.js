import styles from './page.module.css';

const Hero = ()=>{


    return (
        <div className={styles.container}>

            <div className={styles.left_sec}>

                <h5>An IT Company</h5>
                <h1>Discover The Future Of Technology: Your Path To Success Starts HereTechUp</h1>
                <p>Join us on a transformative journey where technology meets ambition, unlocking endless possibilities for your business growth and innovation.</p>
                <button>Explore More</button>
            </div>

            <div className={styles.right_sec}>
                <img src='https://preettech.com/wp-content/uploads/2023/08/casual-woman-happy-smile-young-asain-girl-hold-tab-9ZCVQUD.jpg'/>
            </div>

          

        </div>
    )


}

export default Hero;