import React, {useState, useEffect} from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);

        const targetElement = document.getElementById(targetId);

        if (targetElement != null) {
            targetElement.firstElementChild.scrollIntoView({ behavior: "smooth"});
        }
      };

    return (
        <div id="Footer">
            <div className={styles.content_box3}>
                <div className={styles.flex_row41}>
                    <div className={styles.flex_col23}>
                    <div className={styles.info1}>Адрес: г. Томск, Варшавское шоссе 26</div>
                    <div className={styles.info11}>Тел: +7 (924) 444-77-77</div>
                    <div className={styles.info12}>Email: balans@maiil.ru</div>
                    <div className={styles.info3}>Согласие на обработку персональных данных</div>
                    </div>

                    <div className={styles.flex_col24}>
                    <div className={styles.flex_row42}>
                        <div className={styles.info2} href="#Homepage" onClick={handleScroll}>Главная</div>
                        <div className={styles.info2} href="#Directions" onClick={handleScroll}>Направления</div>
                        <div className={styles.info2} href="#Price" onClick={handleScroll}>Прайс</div>
                        <div className={styles.info2} href="#Schedule" onClick={handleScroll}>Расписание</div>
                        <div className={styles.info2} href="#Experts" onClick={handleScroll}>Эксперты</div>
                        <div className={styles.info2} href="#Feedback" onClick={handleScroll}>Отзывы</div>
                        <div className={styles.info2} href="#FAQ" onClick={handleScroll}>FAQ</div>
                        <div className={styles.info2} href="#Contacts" onClick={handleScroll}>Контакты</div>
                    </div>

                    <div className={styles.flex_row43}>
                        <img
                        className={styles.image90}
                        src={'/assets/d85f3098824842c89482b0de54aae666.svg'}
                        alt="alt text"
                        />
                        <h2 className={styles.medium_title2}>BALANCE</h2>
                    </div>
                    </div>

                    <div className={styles.flex_col25}>
                    <div className={styles.flex_row44}>
                        <img
                        className={styles.image82}
                        src={'/assets/9331a91b80352b56f3f8165d21eddd07.svg'}
                        alt="alt text"
                        />
                        <img
                        className={styles.image82}
                        src={'/assets/89a7f5516519d47826d240ab36552be6.svg'}
                        alt="alt text"
                        />
                        <img
                        className={styles.image82}
                        src={'/assets/5e089864cc84b736c6635eea0a897a4e.svg'}
                        alt="alt text"
                        />
                    </div>

                    <div className={styles.info31}>Политика конфиденциальности</div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Footer;
