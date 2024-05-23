import React, {useState, useEffect} from 'react';
import styles from './faq.module.scss';
import IApi from 'api/baseApi';

const FAQ = () => {
    const [data, setData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await IApi.getFAQ();
            console.log(data);
            setData(data);
        };

        fetchData();
    }, []);

    const handleClick = (index) => {
        setSelectedIndex(prev => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div id="FAQ">
            <div className={styles.flex_row}>
                <div className={styles.flex_col}>
                    <h1 className={styles.hero_title6}>
                        Всегда на связи <br />с клиентом{' '}
                    </h1>

                    <div className={styles.flex_col1}>
                        <hr className={styles.line10} size={1} />
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <hr className={styles.line102} size={1} />
                                {(selectedIndex.includes(index)) ? (
                                    <div className={styles.flex_row1}>
                                        <img
                                            className={styles.image46}
                                            src={'/assets/506b8a091842ac6a1e87f513045dede1.svg'}
                                            alt="alt text"
                                            onClick={() => handleClick(index)}
                                        />
                                        <div className={styles.flex_col2}>
                                            <h2 className={styles.medium_title1}>{item.title}</h2>
                                            <h5 className={styles.highlight1}>{item.answer}</h5>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.flex_row2} onClick={() => handleClick(index)}>
                                        <img
                                            className={styles.image461}
                                            src={'/assets/1c184641540b71fc9ff4906c1338859c.svg'}
                                            alt="alt text"
                                        />
                                        <h5 className={styles.highlight5}>{item.title}</h5>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        <hr className={styles.line102} size={1} />
                    </div>
                </div>

                <img className={styles.image75} src={'/assets/praying_pose.png'} alt="alt text" />
            </div>
        </div>
    );
}

export default FAQ;
