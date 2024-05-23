import React, {useState} from 'react';
import styles from './homepage.module.scss';
import Navbar from './Navbar';

const Homepage = () => {
    const images = [
        '/assets/homepage1.png',
        '/assets/homepage2.png',
        '/assets/homepage3.png'
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div id="HomePage">
            <Navbar></Navbar>

            <div className={styles.flex_col1}>
                <img className={styles.image3} src={images[currentImageIndex]} alt="alt text" />

                <div className={styles.flex_row1}>
                    <div className={styles.flex_row2}>
                        <h5 className={styles.highlight_box}>
                            <span className={styles.highlight}>
                                <span className={styles.highlight_span0}>{currentImageIndex + 1}</span>
                                <span className={styles.highlight_span1}>/3</span>
                            </span>
                        </h5>
                        
                    </div>
                    
                    <div className={styles.navigation_row}>
                        <div className={styles.line1} style={{ width: `${(currentImageIndex + 1) * 33.33}%` }} />
                        <div className={styles.line2} style={{ width: `${3 * 33.33}%` }} />
                    </div>
                    <div className={styles.arrow_row}>
                        <div className={styles.image4}onClick={handlePreviousImage}>
                            <div className={styles.ellipse}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="rgb(254, 251, 247)" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="16.5" stroke="rgba(120, 151, 118, 1)"/>
                                </svg>
                            </div>
                            <div className={styles.arrow}>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.1574 1.00012L1.40031 5.75721C1.35094 5.80659 1.35094 5.88664 1.40031 5.93601L6.1574 10.6931" stroke="#789776" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.image5}  onClick={handleNextImage}>
                            <div className={styles.ellipse}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="rgb(254, 251, 247)" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="16.5" stroke="rgba(120, 151, 118, 1)"/>
                                </svg>
                            </div>
                            <div className={styles.arrow}>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.1574 1.00012L1.40031 5.75721C1.35094 5.80659 1.35094 5.88664 1.40031 5.93601L6.1574 10.6931" stroke="#789776" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                   </div>

                </div>
                </div>

                <div className={styles.flex_row3}>
                <img className={styles.image2} src={'/assets/meditation_pose.png'} alt="alt text" />

                <div className={styles.flex_col2}>
                    <div className={styles.flex_row4}>
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

                    <div className={styles.flex_row4}>
                    <h1 className={styles.big_title_box}>
                        <span className={styles.big_title}>
                        <span className={styles.big_title_span0}>4</span>
                        <span className={styles.big_title_span1}> </span>
                        </span>
                    </h1>
                    <p className={styles.paragraph}> тренера с большим практическим  опытом </p>
                    </div>

                    <div className={styles.flex_row4}>
                    <h1 className={styles.big_title_box}>
                        <span className={styles.big_title}>
                        <span className={styles.big_title_span0}>2</span>
                        <span className={styles.big_title_span1}> </span>
                        </span>
                    </h1>
                    <p className={styles.paragraph}>   просторных зала     для занятий </p>
                    </div>
                </div>
            </div>

            <div className={styles.flex_col3}>
                <h1 className={styles.hero_title}>Студия йоги и пилатеса</h1>
                <h5 className={styles.highlight14}>
                    Здесь мы поможем вам держать тело  в тонусе, а душу - в гармонии.
                </h5>
            </div>

            <button className={styles.btn} style={{ '--src': `url(${'/assets/ffa527dfc719e7a24aeee0e1aa12e795.svg'})` }}>
                <h5 className={styles.highlight31}>ЗАПИСАТЬСЯ</h5>
                <img className={styles.image10} src={'/assets/flower.svg'} alt="alt text" />
            </button>

        </div>
  );
}

export default Homepage;
