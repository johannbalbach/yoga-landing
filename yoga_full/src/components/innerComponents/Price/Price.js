import React, {useState, useEffect} from 'react';
import styles from './price.module.scss';
import IApi from 'api/baseApi';

const Price = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const data = await IApi.getPricing();
          setData(data);
        };
    
        fetchData();
        }, []);

    return (
        <div id="Price">
        <div className={styles.anchor2}></div>

        <div className={styles.grid}>
            {data.map((item, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.flex_row11}>
                        <div className={styles.flex_row12}>
                            {item.isCountless ? (
                                 <h5 className={styles.highlight11}>безлимит на месяц</h5>
                            ):(
                                <>
                                    <h1 className={styles.hero_title3}>{item.sessionsPerMonth}</h1>
                                    <h5 className={styles.highlight11}>
                                        {typeof item.sessionsPerMonth === 'number' ? `занятия в месяц` : item.sessionsPerMonth}
                                        
                                    </h5>
                                </>
                            )}
                            
                        </div>

                        <h1 className={styles.hero_title3}>{item.monthlyPrice}</h1>
                    </div>

                    <hr className={styles.line61} size={1} />

                    <div className={styles.flex_row11}>
                        <div className={styles.flex_row12}>
                            <h1 className={styles.hero_title3}>1</h1>
                            <h5 className={styles.highlight6}>занятие</h5>
                        </div>
                        {item.isCountless ? (
                            <h5 className={styles.highlight7}>{item.singleSessionPrice}</h5>
                        ):(
                            <h1 className={styles.hero_title3} style={{ color: 'rgb(120, 151, 118)' }}>
                            {item.singleSessionPrice}
                        </h1>
                        )}


                    </div>
                </div>
            ))}
        </div>

        <button className={styles.btn}>ЗАПИСАТЬСЯ</button>

        <div className={styles.flex_col12}>
            <h1 className={styles.hero_title21_box}>
                <span className={styles.hero_title21}>
                    <span className={styles.hero_title21}>800</span>
                    <div className={styles.line61} style={{ width: '100%' }}></div>
                    <span className={styles.hero_title21}> </span>
                </span>
            </h1>

            <div className={styles.flex_row21}>
                <h1 className={styles.big_title2}>1</h1>
                <h5 className={styles.highlight53}>занятие</h5>
            </div>
        </div>

        <h1 className={styles.hero_title64}>Стоимость наших тренировок</h1>

        <div className={styles.flex_col13}>
            <p className={styles.text12_box}>
                <span className={styles.text12}>
                    <span className={styles.text12}>После покупки абонемента его необходимо </span>
                    <span className={styles.text12} style={{fontWeight: 'bold'}}>активировать в течении трех месяцев </span>
                    <span className={styles.text12}> с момента приобретения (дата активации - первое занятие).</span>
                </span>
                <br></br>
                <br></br>
                <span className={styles.text12}>Первая тренировка для новых клиентов бесплатная</span>
            </p>
        </div>

        <img className={styles.decorator4} src={'/assets/03c5add8d8c5d65de18a5764f7269171.svg'} alt="alt text" />
        <img className={styles.decorator6} src={'/assets/a6593f0235e6af69dc2ba333cbaa58c4.svg'} alt="alt text" />
    </div>
  );
}

export default Price;
