import React from 'react';
import styles from './navbar.module.scss'

const Navbar = () => {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);

        const targetElement = document.getElementById(targetId);

        if (targetElement != null) {
            targetElement.firstElementChild.scrollIntoView({ behavior: "smooth"});
        }
      };

     return (
     <div id="Header" >
        <div className={styles.flex_row1}>
            <div className={styles.flex_row2}>
            <img className={styles.image9} src={'/assets/f47fbc902518d4f9876d001999d88fc7.svg'} alt="alt text" />
            <div className={styles.info}>BALANCE</div>
            </div>
    
            <div className={styles.flex_row3}>
                <a className={styles.paragraph11} href="#Directions" onClick={handleScroll}>ПРОГРАММЫ</a>
                <a className={styles.paragraph11} href="#Price" onClick={handleScroll}>ПРАЙС</a>
                <a className={styles.paragraph11} href="#Schedule" onClick={handleScroll}>РАСПИСАНИЕ</a>
                <a className={styles.paragraph11} href="#Feedback" onClick={handleScroll}>ОТЗЫВЫ</a>
                <a className={styles.paragraph11} href="#Contacts" onClick={handleScroll}>КОНТАКТЫ</a>
            </div>

            <div className={styles.flex_row4}>
            <img className={styles.image7} src={'/assets/910b73ea4d3457674e81f7763d39d4cf.svg'} alt="alt text" />
            <h5 className={styles.highlight2}>+7 (924) 444-77-77</h5>
            </div>
        </div>
    </div>
)}

export default Navbar;