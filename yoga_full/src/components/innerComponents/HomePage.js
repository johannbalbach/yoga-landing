import React from 'react';
import styles from './styles.module.scss';

const Homepage = () => {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);

        const targetElement = document.getElementById(targetId);

        if (targetElement != null) {
            console.log("LOGLOGLOG", targetElement);
            //targetElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            console.log(targetElement.firstElementChild);
            console.log(targetElement.firstElementChild.getBoundingClientRect());
            
            targetElement.firstElementChild.scrollIntoView({ behavior: "smooth"});
        }
      };

    return (
        <div id="HomePage">
            <div className={styles.flex_col16}>
                <img className={styles.image3} src={'/assets/homepage1.png'} alt="alt text" />

                <div className={styles.flex_row27}>
                    <div className={styles.flex_row28}>
                    <h5 className={styles.highlight_box}>
                        <span className={styles.highlight}>
                        <span className={styles.highlight_span0}>1</span>
                        <span className={styles.highlight_span1}>/3</span>
                        </span>
                    </h5>
                    <img className={styles.line} src={'/assets/Vector.svg'} alt="alt text" />
                    </div>

                    <img className={styles.image4} src={'/assets/left.svg'} alt="alt text" />
                    <img className={styles.image4} src={'/assets/right.svg'} alt="alt text" />
                </div>
            </div>

            <div className={styles.flex_row29}>
            <img className={styles.image2} src={'/assets/meditation_pose.png'} alt="alt text" />

            <div className={styles.flex_col17}>
                <div className={styles.flex_row30}>
                <h1 className={styles.big_title_box}>
                    <span className={styles.big_title}>
                    <span className={styles.big_title_span0}>6</span>
                    <span className={styles.big_title_span1}> </span>
                    </span>
                </h1>
                <p className={styles.paragraph}>
                    направлений <br />
                    в одном абонементе
                </p>
                </div>

                <div className={styles.flex_row31}>
                <h1 className={styles.big_title1_box}>
                    <span className={styles.big_title1}>
                    <span className={styles.big_title1_span0}>4</span>
                    <span className={styles.big_title1_span1}> </span>
                    </span>
                </h1>
                <p className={styles.paragraph1}>тренера с большим практическим  опытом </p>
                </div>

                <div className={styles.flex_row32}>
                <h1 className={styles.big_title1_box}>
                    <span className={styles.big_title1}>
                    <span className={styles.big_title1_span0}>2</span>
                    <span className={styles.big_title1_span1}> </span>
                    </span>
                </h1>
                <p className={styles.paragraph2}>просторных зала для занятий </p>
                </div>
            </div>
            </div>

            <div className={styles.flex_col18}>
            <h1 className={styles.hero_title}>Студия йоги и пилатеса</h1>
            <h5 className={styles.highlight14}>
                Здесь мы поможем вам держать тело  в тонусе, а душу - в гармонии.
            </h5>
            </div>

            <div id="Header">
            <div className={styles.flex_row33}>
                <div className={styles.flex_row34}>
                <img className={styles.image9} src={'/assets/f47fbc902518d4f9876d001999d88fc7.svg'} alt="alt text" />
                <div className={styles.info}>BALANCE</div>
                </div>
        
                <div className={styles.flex_row35}>
                    <a className={styles.paragraph11} href="#Directions" onClick={handleScroll}>Программы</a>
                    <a className={styles.paragraph11} href="#Price" onClick={handleScroll}>Прайс</a>
                    <a className={styles.paragraph11} href="#Schedule" onClick={handleScroll}>Расписание</a>
                    <a className={styles.paragraph11} href="#Feedback" onClick={handleScroll}>Отзывы</a>
                    <a className={styles.paragraph11} href="#Contacts" onClick={handleScroll}>Контакты</a>
                </div>

                <div className={styles.flex_row36}>
                <img className={styles.image7} src={'/assets/910b73ea4d3457674e81f7763d39d4cf.svg'} alt="alt text" />
                <h5 className={styles.highlight2}>+7 (924) 444-77-77</h5>
                </div>
            </div>
            </div>
            

            <div
            className={styles.content_box}
            style={{ '--src': `url(${'/assets/ffa527dfc719e7a24aeee0e1aa12e795.svg'})` }}>
            <img className={styles.image10} src={'/assets/plant_illustration.png'} alt="alt text" />
            <h5 className={styles.highlight31}>записаться</h5>
            </div>
        </div>
  );
}

export default Homepage;
