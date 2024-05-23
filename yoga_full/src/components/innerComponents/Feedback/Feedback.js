import React, {Fragment, useState, useEffect} from 'react';
import styles from './feedback.module.scss';
import IApi from 'api/baseApi';

const Feedback = () => {
    const [selectedFeedback, setSelectedFeedback] = useState('');
    const [data, setData] = useState([])
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handleNextReview = () => {
        const index = (currentFeedbackIndex + 1) % data.length;

        setCurrentFeedbackIndex(index);
        setSelectedFeedback(data[index]);
    };

    const handlePreviousReview = () => {
        const index = (currentFeedbackIndex - 1 + data.length) % data.length;

        setCurrentFeedbackIndex(index);
        setSelectedFeedback(data[index]);
    };

    useEffect(() => {
        const fetchData = async () => {
          const data = await IApi.getFeedbacks();

          console.log(data)
          setData(data);

          if (data != null){
            setCurrentFeedbackIndex(0);
            setSelectedFeedback(data[0]);
          }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        const updateCarouselShift = () => {
            const shift = -(currentFeedbackIndex * 100);
            document.querySelector(`.${styles.content_row}`).style.transform = `translateX(${shift}%)`;
        };

        updateCarouselShift(); // вызываем при первом рендере

        // обновляем при изменении currentFeedbackIndex
        window.addEventListener('resize', updateCarouselShift);

        return () => {
            window.removeEventListener('resize', updateCarouselShift);
        };
    }, [currentFeedbackIndex]);
    
    return (
        <div id="Feedback" className={styles.root}>
            <div className={styles.anchor4}> </div>


            <div className={styles.content_row}>
                {data.map((feedback, index) => (
                    <Fragment key={index}>
                        {feedback == selectedFeedback ? (
                            <>
                                <div className={styles.content_box1}>
                                    <div className={styles.flex_col2} style={{gap: '32px 0px'}}>
                                    <div className={styles.flex_col3}>
                                        <h3 className={styles.subtitle}>{feedback.name}</h3>
                                        <hr className={styles.line4} size={1} />
                                        <p className={styles.paragraph1}>
                                        {feedback.desc}
                                        </p>
                                    </div>

                                    <div className={styles.flex_row1}>
                                        <div className={styles.text21}>Подробнее</div>
                                        <div className={styles.text22}>{feedback.date}</div>
                                    </div>
                                    </div>

                                    <div className={styles.circle1}>
                                        <img className={styles.image6} src={`/assets/${feedback.svg}`} alt="alt text" />
                                    </div>
                                    <img className={styles.image8} src={'/assets/flower4.svg'} alt="alt text" />
                                </div>
                            </>
                            ) : (
                            <>
                                <div className={styles.content_box3}>
                                    <div className={styles.flex_col2}>
                                    <div className={styles.flex_col3}>
                                        <div className={styles.text}>{feedback.name}</div>
                                        <hr className={styles.line3} size={1} />
                                        <p className={styles.paragraph_box}>
                                        <span className={styles.paragraph}>
                                            {feedback.desc}
                                        </span>
                                        </p>
                                    </div>

                                    <div className={styles.flex_row}>
                                        <div className={styles.text1}>Подробнее</div>
                                        <div className={styles.text}>{feedback.date}</div>
                                    </div>
                                    </div>

                                    {/* <div className={styles.rect}></div> */}
                                    <div className={styles.circle}>
                                        <img className={styles.image4} src={`/assets/${feedback.svg}`} alt="alt text" />
                                    </div>
                                    
                                </div>
                            </>)}
                    </Fragment>
                ))}

            </div>


            <div className={styles.content_box}>
                <h5 className={styles.highlight}>оставить отзыв</h5>
            </div>

            <div className={styles.image}>
                <div className={styles.arrow_row1}>
                    <div className={styles.image41}onClick={handlePreviousReview}>
                        <div className={styles.ellipse}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="rgb(254, 251, 247)" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="16.5" stroke="rgba(120, 151, 118, 1)"/>
                            </svg>
                        </div>
                        <div className={styles.arrow}>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.1574 1.00012L1.40031 5.75721C1.35094 5.80659 1.35094 5.88664 1.40031 5.93601L6.1574 10.6931" stroke="#789776" strokeLinecup="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.image5}  onClick={handleNextReview}>
                        <div className={styles.ellipse}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="rgb(254, 251, 247)" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="16.5" stroke="rgba(120, 151, 118, 1)"/>
                            </svg>
                        </div>
                        <div className={styles.arrow}>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.1574 1.00012L1.40031 5.75721C1.35094 5.80659 1.35094 5.88664 1.40031 5.93601L6.1574 10.6931" stroke="#789776" strokeLinecup="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.navigation_row}>
                    <div className={styles.line1} style={{ width: `${(currentFeedbackIndex + 1) * 33.33}%` }} />
                    <div className={styles.line2} style={{ width: `${(data.length) * 33.33}%` }} />
                </div>
            </div>
            <h1 className={styles.hero_title}>Наши довольные клиенты</h1>
        </div>
    );
}

export default Feedback;
