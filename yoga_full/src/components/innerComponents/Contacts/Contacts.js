import React, {useState, useEffect} from 'react';
import styles from './contacts.module.scss';

const Contacts = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div id="Contacts">
            <div className={styles.anchor5}></div>
            <img className={styles.decorator9} src={'/assets/flower_illustration.png'} alt="alt text" />
            <img className={styles.decorator8} src={'/assets/b0c0a1a36ec1afadfc7e6c25f8bfd5b3.svg'} alt="alt text" />
            <div className={styles.flex_col19}>
                <div className={styles.flex_col20}>
                    <h1 className={styles.hero_title7}>Нас можно найти </h1>

                    <div className={styles.flex_row6}>
                        <div className={styles.flex_col21}>
                            <input 
                            className={styles.text4}
                            type="name"
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <hr className={styles.line16} size={1} />
                        </div>

                        <div className={styles.flex_col21}>
                            <input 
                            className={styles.text4}
                            type="tel"
                            placeholder="Номер телефона"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <hr className={styles.line16} size={1} />
                        </div>

                        <div className={styles.flex_row37}>
                            <img
                            className={styles.image78}
                            src={'/assets/9467570b7e11215c0d1fb9af6727beee.svg'}
                            alt="alt text"
                            onClick={handleCheckboxClick}
                            />
                            {isChecked && <img
                            className={styles.image2}
                            src={'/assets/check.svg'}
                            alt="alt text"
                            onClick={handleCheckboxClick}
                            />}
                            <p className={styles.desc}>Принимаю условия политики конфиденциальности</p>
                        </div>

                        <button className={styles.btn2}>ОТПРАВИТЬ</button>
                    </div>
                </div>

                <div className={styles.content_box5} style={{ '--src': `url(${'/assets/location_map.png'})` }}>
                    <img className={styles.image79} src={'/assets/c28a35bd51dd96f22a56af32fd89523a.svg'} alt="alt text" />

                    <div className={styles.content_box4}>
                    <div className={styles.flex_col22}>
                        <div className={styles.flex_row38}>
                            <img
                                className={styles.image40}
                                src={'/assets/1505f8119768b029d3798cbe53528ef0.svg'}
                                alt="alt text"
                            />
                            <div className={styles.text5}>+7 (924) 444-77-77</div>
                        </div>

                        <div className={styles.flex_row39}>
                            <img
                                className={styles.image85}
                                src={'/assets/6c7f937ca61877ab4ac91f6fffea9bc4.svg'}
                                alt="alt text"
                            />
                            <div className={styles.text51}>г. Томск, Варшавское шоссе 26</div>
                        </div>

                        <div className={styles.flex_row40}>
                            <img
                                className={styles.image85}
                                src={'/assets/15e7077ae2c3cb7e8cadbfd3ff051fa6.svg'}
                                alt="alt text"
                            />
                            <div className={styles.text51}>balans@maiil.ru</div>
                        </div>

                        <img
                        className={styles.image81}
                        src={'/assets/53f961c18166513ccdecb41ca0a18b5f.svg'}
                        alt="alt text"
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
