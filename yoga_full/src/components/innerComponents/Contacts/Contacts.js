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

                            <div className={styles.image81}>
                                <div className={styles.image82}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="#789776" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="19.29" stroke="#FEFBF7" strokeWidth="1.42"/>
                                    <path d="M29.5085 15.1566C29.6583 14.6543 29.5085 14.2859 28.8006 14.2859H26.4555C25.8588 14.2859 25.5861 14.6046 25.4364 14.9546C25.4364 14.9546 24.244 17.8918 22.5544 19.7962C22.009 20.3504 21.7599 20.5254 21.4626 20.5254C21.3139 20.5254 21.0979 20.3504 21.0979 19.8481V15.1566C21.0979 14.5538 20.9258 14.2859 20.4285 14.2859H16.7434C16.3713 14.2859 16.1467 14.5646 16.1467 14.8303C16.1467 15.4007 16.9915 15.5325 17.0782 17.1399V20.627C17.0782 21.3907 16.9423 21.53 16.6429 21.53C15.8484 21.53 13.9149 18.582 12.7675 15.2073C12.544 14.5516 12.3184 14.287 11.7195 14.287H9.37546C8.70496 14.287 8.57129 14.6056 8.57129 14.9556C8.57129 15.5844 9.36583 18.6955 12.2724 22.8101C14.2101 25.6199 16.9381 27.143 19.4233 27.143C20.9129 27.143 21.0969 26.8049 21.0969 26.2216V24.0978C21.0969 23.4216 21.2391 23.2855 21.7107 23.2855C22.0572 23.2855 22.6539 23.4626 24.0451 24.8162C25.6342 26.4214 25.8973 27.142 26.7902 27.142H29.1343C29.8037 27.142 30.1384 26.8038 29.9459 26.1362C29.7353 25.4719 28.976 24.5051 27.9686 23.3611C27.4211 22.7086 26.6031 22.0064 26.3539 21.6554C26.0063 21.2027 26.1069 21.0029 26.3539 20.601C26.3539 20.601 29.2113 16.5382 29.5085 15.1566Z" fill="#FEFBF7"/>
                                </svg>
                                </div>
                                <div className={styles.image82}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="#789776" xmlns="http://www.w3.org/2000/svg">
                                        <  circle cx="20" cy="20" r="19.29" stroke="#FEFBF7" strokeWidth="1.42"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M27.0859 12.9064C26.1634 11.9822 25.0658 11.2494 23.8567 10.7504C22.6476 10.2515 21.351 9.99623 20.0421 9.99954C14.5535 9.99954 10.0854 14.4453 10.0831 19.9101C10.0831 21.6566 10.5413 23.3612 11.412 24.8648L9.99994 29.9995L15.2789 28.6206C16.7391 29.4117 18.3751 29.8266 20.0376 29.8273H20.0421C25.5296 29.8273 29.9977 25.3815 29.9999 19.9167C30.0037 18.6145 29.7481 17.3245 29.2479 16.1213C28.7477 14.918 28.0129 13.8253 27.0859 12.9064ZM20.0421 28.1547H20.0387C18.5562 28.1549 17.101 27.7579 15.8258 27.0055L15.5241 26.8266L12.3915 27.6447L13.2268 24.6054L13.0304 24.2941C12.2016 22.9808 11.7628 21.461 11.7648 19.9101C11.767 15.3683 15.4797 11.6732 20.0454 11.6732C21.1328 11.6708 22.2098 11.883 23.2142 12.2977C24.2186 12.7123 25.1303 13.3211 25.8967 14.0887C26.6673 14.8528 27.278 15.7612 27.6936 16.7615C28.1093 17.7618 28.3216 18.8342 28.3183 19.9167C28.316 24.4586 24.6033 28.1547 20.0421 28.1547ZM24.5823 21.9845C24.3327 21.8598 23.1103 21.2614 22.8818 21.1786C22.6544 21.0958 22.4891 21.0549 22.3227 21.3022C22.1563 21.5495 21.6793 22.1071 21.534 22.2727C21.3887 22.4383 21.2434 22.4581 20.9949 22.3345C20.7465 22.2108 19.9445 21.9492 18.9938 21.1057C18.2539 20.4489 17.7548 19.6385 17.6095 19.3901C17.4641 19.1417 17.5939 19.0081 17.7193 18.8845C17.8313 18.7741 17.9678 18.5952 18.092 18.4506C18.2162 18.306 18.2573 18.2033 18.3405 18.0377C18.4237 17.8721 18.3826 17.7275 18.3194 17.6039C18.2573 17.4791 17.7592 16.2603 17.5518 15.7646C17.351 15.2844 17.1458 15.3484 16.9927 15.3418C16.8342 15.3353 16.6755 15.3324 16.5168 15.3329C16.3907 15.3361 16.2665 15.3653 16.1522 15.4184C16.0378 15.4716 15.9358 15.5478 15.8524 15.6421C15.6239 15.8905 14.9816 16.4888 14.9816 17.7076C14.9816 18.9264 15.8735 20.1044 15.9977 20.27C16.1219 20.4356 17.7526 22.9362 20.2484 24.0092C20.843 24.2643 21.3066 24.4166 21.6671 24.5314C22.2628 24.7202 22.8052 24.6926 23.2345 24.6297C23.7126 24.559 24.7065 24.0313 24.9139 23.4528C25.1214 22.8743 25.1214 22.3786 25.0593 22.2749C24.9971 22.1711 24.8296 22.1082 24.5823 21.9845Z" fill="#FEFBF7"/>
                                    </svg>
                                </div>
                                <div className={styles.image82}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="#789776" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.29" stroke="#FEFBF7" strokeWidth="1.42"/>
                                        <path d="M27.2213 11.5417L9.5051 18.5238C8.29605 19.0202 8.30304 19.7095 9.28328 20.0169L13.8317 21.467L24.3555 14.6809C24.8531 14.3715 25.3078 14.538 24.934 14.877L16.4077 22.7415H16.4057L16.4077 22.7426L16.094 27.5342C16.5536 27.5342 16.7564 27.3187 17.0142 27.0644L19.2235 24.8688L23.8189 28.3379C24.6663 28.8148 25.2748 28.5697 25.4856 27.5362L28.5023 13.0061C28.811 11.7408 28.0296 11.1679 27.2213 11.5417Z" fill="#FEFBF7"/>
                                    </svg>
                                </div>
                            </div>
                            <img className={styles.decorator9} src={'/assets/flower_illustration.svg'} alt="alt text" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contacts;
