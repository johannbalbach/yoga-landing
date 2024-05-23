import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './modal.module.scss';

const Modal = ({ direction, time, handleClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [comment, setComment] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    
    const handleResponse = () => {
        setIsSubmitted(true);
    };

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    if (isSubmitted) {
        return (
            <div className={`${styles.overlay}`}>
                <div className={`${styles.root} ${styles.modalResponse}`}>
                    <img className={styles.image} src={'/assets/Close.svg'} alt="alt text" onClick={handleClose} />
                    <div className={styles.flex_col}>
                        <h3 className={styles.subtitle}>
                            спасибо!
                            <br />
                            ваша заявка принята{' '}
                        </h3>
                        <p className={styles.paragraph}>Наш менеджер свяжется в вами в ближайшее время </p>
                    </div>
                    <img className={styles.decorator} src={'/assets/cf68ecfdf7ea9bdeeb1566f6edf8e635.svg'} alt="alt text" />
                </div>
            </div>
        );
    }

    return (
        <div className={styles.overlay}>
        <div className={styles.root}>
            <img className={styles.image} src={'/assets/Close.svg'} alt="alt text" onClick={handleClose} />
            <div className={styles.flex_col}>
                <div className={styles.flex_col1}>
                    <h2 className={styles.medium_title}>
                        Записаться <br />
                        на тренировку
                    </h2>
                    <div className={styles.text}>{`${direction} (${time})`}</div>
                    <hr className={styles.line} size={1} />
                    <input
                        className={styles.text1}
                        type="tel"
                        placeholder="Номер телефона"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <hr className={styles.line} size={1} />
                    <input
                        className={styles.text1}
                        placeholder="Комментарий"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <hr className={styles.line1} size={1} />
                </div>
                <button className={styles.btn} onClick={handleResponse}>отправить</button>
                <div className={styles.flex_row} onClick={handleCheckboxClick}>
                    <img className={styles.image1} src={'/assets/9467570b7e11215c0d1fb9af6727beee.svg'} alt="alt text" onClick={handleCheckboxClick}/>
                    {isChecked && (<img className={styles.image2} src={'/assets/check.svg'} alt="alt text" onClick={handleCheckboxClick}></img>)}
                    <p className={styles.desc}>Принимаю условия политики конфиденциальности</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Modal;