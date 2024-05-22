import React, {useState, useEffect} from 'react';
import styles from './directions.module.scss';
import IApi from 'api/baseApi';

const Directions = () => {
    const [selectedDirection, setSelectedDirection] = useState('');
    const [data, setData] = useState('')

    const handleClick = (direction) => {
        setSelectedDirection(direction); // обновляем состояние при клике на направление
    };

    useEffect(() => {
        const fetchData = async () => {
          const data = IApi.getDirections();

          console.log(data)
          setData(data);

          if (data != null){
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
                    <img className={styles.image351} src={'/assets/735a0b778f870c110a5aace5bbc4d08a.svg'} alt="alt text" />
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
                <button className={styles.btn1}>Кундалини-йога </button>
                <button className={styles.text13}>Хатха-йога </button>
            </div>

            <div className={styles.flex_row24}>
                <button className={styles.text13}>Пилатес</button>
                <button className={styles.text13}>Здоровая спина </button>
            </div>

            <div className={styles.flex_row24}>
                <button className={styles.text13}>Флоу-йога </button>
                <button className={styles.text13}>Стретчинг</button>
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
