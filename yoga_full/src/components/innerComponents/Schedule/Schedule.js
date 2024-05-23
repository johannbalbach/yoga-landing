import React, {useState, useEffect} from 'react';
import styles from './schedule.module.scss';
import IApi from 'api/baseApi';

const Schedule = () => {
    const [data, setData] = useState([])
    const [selectedDay, setSelectedDay] = useState('');

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    useEffect(() => {
        const fetchData = async () => {
            const fetchData = await IApi.getDays();

            setData(fetchData);
            if (fetchData != null){
                setSelectedDay(fetchData[0]);
            }
        };
    
        fetchData();
    }, []);

    const renderSchedule = (day) => {
        const daySchedule = data.find(schedule => schedule.day === day);
        if (!daySchedule) {
            return null;
        }
        return (
            <div>
                {daySchedule.sessions.map((session, index) => (
                    <>
                        <div key={index} className={styles.flex_row7}>
                            <div className={styles.text27}>{session.name}</div>
                            <div className={styles.text26}>{session.time}</div>
                            <div className={styles.text26}>{session.duration}</div>
                            <div className={styles.text26}>{session.trainer}</div>
                            <div className={styles.flex_row8}>
                                <img
                                    className={styles.image7}
                                    src={'/assets/7598cc83db3253aeeff791c78976281b.svg'} // Замените на соответствующие изображения
                                    alt="icon1"
                                />
                                <img
                                    className={styles.image7}
                                    src={'/assets/50089e988af461c3388e4a6bb53a3859.svg'} // Замените на соответствующие изображения
                                    alt="icon2"
                                />
                            </div>
                        </div>
                        <hr className={styles.line10} />
                    </>
                ))}
                
            </div>
        );
    };

    return (
        <div id="Schedule">
            <div className={styles.anchor3}></div>
            <div className={styles.flex_col8}>
                <p className={styles.text12_box}>
                    <span className={styles.text12}>
                        <span className={styles.text12}>Приглашаем на первое пробное занятие </span>
                        <span className={styles.text12} style={{ fontWeight: 'bold' }}>БЕСПЛАТНО!</span>
                        <span className={styles.text12}>
                            {' '}
                            <br />
                            Не упустите возможность попробовать что-то новое и полезное для вашего здоровья!
                        </span>
                    </span>
                </p>
                <img className={styles.image41} src={'/assets/rolling_yoga_mat.png'} alt="alt text" />
            </div>

            <div className={styles.flex_col9}>
                <h1 className={styles.hero_title63}>
                    Найдите свою практику <br />В нашем расписании
                </h1>

                <div className={styles.flex_col10}>
                    <div className={styles.flex_row6}>
                        {data.map((daySchedule, index) => (
                            <div
                                key={index}
                                className={`${styles.text2} ${selectedDay === daySchedule.day ? styles.activeTab : ''}`}
                                onClick={() => handleDayClick(daySchedule.day)}
                            >
                                {selectedDay === daySchedule.day ? (
                                <>
                                    <div className={styles.flex_col11} style={{gap: '0px 0px', margin:'0px 0px 0px 0px'} }>
                                        <div className={styles.text22}>{daySchedule.day}</div>
                                        <hr className={styles.line8} size={1} />
                                    </div>
                                </>) : (
                                <>
                                    <div className={styles.text21}>{daySchedule.day}</div>
                                </>)}
                                
                            </div>
                        ))}
                    </div>
                    
                </div>

                
                <div className={styles.flex_col11}>
                    <br></br>

                    {renderSchedule(selectedDay)}
                </div>

            </div>
        </div>
  );
}

export default Schedule;