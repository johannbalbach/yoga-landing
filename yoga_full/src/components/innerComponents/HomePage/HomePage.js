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
                        <div className={styles.line2} style={{ width: `${(3 - currentImageIndex) * 33.33}%` }} />
                    </div>
                    <div className={styles.arrow_row}>
                        <img className={styles.image4} src={'/assets/left.svg'} alt="alt text" onClick={handlePreviousImage} />
                        <img className={styles.image5} src={'/assets/right.svg'} alt="alt text" onClick={handleNextImage}/>
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
