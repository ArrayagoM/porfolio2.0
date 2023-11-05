import React, { useEffect } from "react";
import style from './About.module.css';  // Asumiendo que tienes un archivo About.module.css en el mismo directorio
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import img5 from '../../img/img5.png'

const About = () => {

  



    return (
        <div className={style.container}>
            <div className={style.section}>
                <p className={style.text}>Hello everyone! Let me introduce myself: I am a young full stack web developer,
                but my true passion is the magic of technology. My journey started with robotics and automation,
                and embarked on an exciting learning journey that led me to obtain a diploma in IoT (Internet of Things).
                 However, what really makes my heart beat is the ability to create.</p>
                <img src={img1} alt="Update img" className={style.image}/>
            </div>

            <div className={style.section}>
                <img src={img2} alt="Update img" className={style.image}/>
                <p className={style.text}>Imagine this: an idea flashing in your mind that, with the power of technology,
                It becomes something tangible, something real.
                That's what I love about the world of computing and web development.
                It's like having a magic wand that turns dreams into reality.</p>
            </div>

            <div className={style.section}>
                <p className={style.text}>Every line of code I write is a brush stroke on the digital canvas of infinite possibilities.
                I am passionate about the thrill of facing new challenges, overcoming obstacles, and making what others can only imagine come true.
                In each project, I find the opportunity to leave a digital footprint, a mark that will last in the vast digital landscape.</p>
                <img src={img3}  alt="Update img" className={style.image}/>
            </div>

            <div className={style.section}>
                <img src={img4} alt="Update img" className={style.image}/>
                <p className={style.text}>I am constantly searching for new horizons and opportunities to learn and grow on this exciting journey.
                My goal is to inspire others to join me in this technological odyssey, where creativity has no limits and ideas become reality.</p>
            </div>

            <div className={style.section}>
                <p className={style.text}>So, go ahead and join me on this journey of discovery and creation in the IT world.
                The future is full of exciting possibilities, and together we can shape a tomorrow full of innovation and technological wonders!</p>
                <img src={img5} alt="Update img" className={style.image}/>
            </div>
        </div>
    )
}

export default About;
