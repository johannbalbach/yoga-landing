import React, {Fragment, useState, useEffect} from 'react';
import styles from './experts.module.scss';
import IApi from 'api/baseApi';

const Experts = () => {
    const [selectedExpert, setSelectedExpert] = useState('');
    const [data, setData] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        const index = (currentImageIndex + 1) % data.length;

        setCurrentImageIndex(index);
        setSelectedExpert(data[index]);
    };

    const handlePreviousImage = () => {
        const index = (currentImageIndex - 1 + data.length) % data.length;

        setCurrentImageIndex(index);
        setSelectedExpert(data[index]);
    };

    useEffect(() => {
        const fetchData = async () => {
          const data = await IApi.getExperts();

          console.log(data)
          setData(data);

          if (data != null){
            setCurrentImageIndex(0);
            setSelectedExpert(data[0]);
          }
        };
    
        fetchData();
        }, []);

    return (
        <div id="Experts">
            <div className={styles.flex_row3}>
                
                {selectedExpert && (
                    <>
                    <div className={styles.flex_col}>
                        <h1 className={styles.hero_title62}>Эксперты в области тела и разума</h1>
                        <div className={styles.flex_row4}>
                            <img className={styles.image44} src={`/assets/${selectedExpert.image}`} alt="alt text" style={{transition: '1s'}} />

                            <div className={styles.content_box1}>
                                <div className={styles.flex_col4}>
                                    <h3 className={styles.subtitle1} style={{transition: '1s'}}>{selectedExpert.name}</h3>
                                    <p className={styles.text1} style={{transition: '1s'}}>
                                        {selectedExpert.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                
                )}
                <div className={styles.flex_col5}>
                    {selectedExpert && (
                        <>
                            <p className={styles.text11}>
                            Наши инструктора сочетают свои знания и опыт, чтобы создать эффективные и интересные занятия, которые
                            помогут вам укрепить мышечный корсет,  достичь гибкости, улучшить осанку и физическую форму.
                            </p>

                            <div className={styles.flex_row5}>
                                {selectedExpert.background_images.map((item, index) => (
                                    <Fragment key={index}>
                                        <div className={styles.flex_col6}>
                                            <img className={styles.image42} src={`/assets/${item.image}`} alt="alt text" style={{transition: '1s'}}/>
                                            <h5 className={styles.highlight51} style={{transition: '1s'}}>{item.name}</h5>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        </>
                    )}

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
                                    <path d="M6.1574 1.00012L1.40031 5.75721C1.35094 5.80659 1.35094 5.88664 1.40031 5.93601L6.1574 10.6931" stroke="#789776" strokeLinecap="round"/>
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
                                    <path d="M6.1574 1.00012L1.40031 5.75721C1.35094 5.80659 1.35094 5.88664 1.40031 5.93601L6.1574 10.6931" stroke="#789776" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    );
}

export default Experts;
