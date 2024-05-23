import React, {useState, useEffect} from 'react';
import styles from './directions.module.scss';
import IApi from 'api/baseApi';

const Directions = () => {
    const [selectedDirection, setSelectedDirection] = useState('');
    const [data, setData] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = (index) => {
        setSelectedDirection(data[index]);
        setCurrentImageIndex(index);
    };
    const handleNextImage = () => {
        const index = (currentImageIndex + 1) % data.length;

        setCurrentImageIndex(index);
        setSelectedDirection(data[index]);
    };

    const handlePreviousImage = () => {
        const index = (currentImageIndex - 1 + data.length) % data.length;

        setCurrentImageIndex(index);
        setSelectedDirection(data[index]);
    };

    useEffect(() => {
        const fetchData = async () => {
          const data = await IApi.getDirections();

          console.log(data)
          setData(data);

          if (data != null){
            setCurrentImageIndex(0);
            setSelectedDirection(data[0]);
          }
        };
    
        fetchData();
        }, []);

    return (
        <div id="Directions">
            <div className={styles.anchor1}></div>
            {selectedDirection && (
                <div className={styles.flex_col14}>
                    <h2 className={styles.medium_title}>{selectedDirection.name}</h2>

                    <div className={styles.flex_row22}>
                        <img className={styles.image37} src={`/assets/d2365435e39536a2ccdd922b5f5f8dda.svg`} alt="alt text" />
                        <h5 className={styles.highlight4}>Проходит по: {selectedDirection.days.join(', ')}</h5>
                    </div>

                    <div className={styles.flex_row23}>
                        <img className={styles.image26} src={'/assets/a7b132a2d12511a5c1a46c31ed321c60.svg'} alt="alt text" />
                        <h5 className={styles.highlight41}>Длительность: {selectedDirection.time}</h5>
                    </div>

                    <h5 className={styles.highlight13}>{selectedDirection.description}</h5>
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
                   <div className={styles.navigation_row}>
                        <div className={styles.line1} style={{ width: `${(currentImageIndex + 1) * 33.33}%` }} />
                        <div className={styles.line2} style={{ width: `${(data.length) * 33.33}%` }} />
                    </div>
                </div>
            )}

            <div className={styles.group}>
                <img className={styles.image30} src={'/assets/58b2ebd9942365e2c39af1ad87a3dda3.svg'} alt="alt text" />
                {selectedDirection && (
                    <img className={styles.image36} src={`/assets/${selectedDirection.image}`} alt="alt text" />
                )}
            </div>

            <div className={styles.flex_col15}>
                <div className={styles.flex_row24}>
                    {data.map((direction, index) => (
                        <button
                            className={selectedDirection === direction ? styles.btn1 : styles.btn2}
                            onClick={() => handleClick(index)}
                        >
                            {direction.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.group1}>
            <h3 className={styles.subtitle}>Не определились с направлением? Мы подскажем!</h3>
            <h1 className={styles.hero_title1}>Все направления в одном абонементе</h1>
            </div>

        <img className={styles.decorator} src={'/assets/0ad68f50bf1d900abd0c3145fea377f9.svg'} alt="alt text" />
      </div>
  );
}

export default Directions;
