import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

const DefaultPage = () => {
  return (
    <>
      <div id="FAQ" >
        <div className={styles.flex_row}>
          <div className={styles.flex_col}>
            <h1 className={styles.hero_title6}>
              Всегда на связи <br />с клиентом{' '}
            </h1>

            <div className={styles.flex_col1}>
              <hr className={styles.line10} size={1} />

              <div className={styles.flex_row1}>
                <img
                  className={styles.image46}
                  src={'/assets/506b8a091842ac6a1e87f513045dede1.svg'}
                  alt="alt text"
                />

                <div className={styles.flex_col2}>
                  <h2 className={styles.medium_title1}>Как записаться на занятия йогой? </h2>
                  <h5 className={styles.highlight1}>
                    Вы можете записаться на занятия через наш сайт или по телефону. Также <br />
                    вы можете прийти в наш центр и записаться на ресепшене.
                    <br />
                  </h5>
                </div>
              </div>

              <hr className={styles.line101} size={1} />

              <div className={styles.flex_row2}>
                <img
                  className={styles.image461}
                  src={'/assets/1c184641540b71fc9ff4906c1338859c.svg'}
                  alt="alt text"
                />
                <h5 className={styles.highlight5}>Нужно ли покупать коврик для занятий и другой инвентарь?</h5>
              </div>

              <hr className={styles.line102} size={1} />

              <div className={styles.flex_row2}>
                <img
                  className={styles.image461}
                  src={'/assets/1c184641540b71fc9ff4906c1338859c.svg'}
                  alt="alt text"
                />
                <h5 className={styles.highlight5}>Что нужно брать на пробное занятие?</h5>
              </div>

              <hr className={styles.line102} size={1} />

              <div className={styles.flex_row2}>
                <img
                  className={styles.image461}
                  src={'/assets/1c184641540b71fc9ff4906c1338859c.svg'}
                  alt="alt text"
                />
                <h5 className={styles.highlight5}>Смогу ли заниматься с моей комплекцией?</h5>
              </div>

              <hr className={styles.line102} size={1} />

              <div className={styles.flex_row2}>
                <img
                  className={styles.image461}
                  src={'/assets/1c184641540b71fc9ff4906c1338859c.svg'}
                  alt="alt text"
                />
                <h5 className={styles.highlight5}>Для моего возраста подойдут занятия?</h5>
              </div>

              <hr className={styles.line102} size={1} />

              <div className={styles.flex_row2}>
                <img
                  className={styles.image461}
                  src={'/assets/1c184641540b71fc9ff4906c1338859c.svg'}
                  alt="alt text"
                />
                <h5 className={styles.highlight5}>
                  Можно ли получить консультацию по йоге у вашего инструктора?
                </h5>
              </div>

              <hr className={styles.line102} size={1} />
            </div>
          </div>

          <img className={styles.image75} src={'/assets/praying_pose.png'} alt="alt text" />
        </div>
      </div>

      <div id="Contacts">
        <div className={styles.anchor5}></div>
        <img className={styles.decorator9} src={'/assets/flower_illustration.png'} alt="alt text" />
        <img className={styles.decorator8} src={'/assets/b0c0a1a36ec1afadfc7e6c25f8bfd5b3.svg'} alt="alt text" />
        <div className={styles.flex_col19}>
          <div className={styles.flex_col20}>
            <h1 className={styles.hero_title7}>Нас можно найти </h1>

            <div className={styles.flex_row6}>
              <div className={styles.flex_col21}>
                <div className={styles.text4}>Имя</div>
                <hr className={styles.line16} size={1} />
              </div>

              <div className={styles.flex_col21}>
                <div className={styles.text4}>Номер телефона</div>
                <hr className={styles.line16} size={1} />
              </div>

              <div className={styles.flex_row37}>
                <img
                  className={styles.image78}
                  src={'/assets/9467570b7e11215c0d1fb9af6727beee.svg'}
                  alt="alt text"
                />
                <p className={styles.desc}>Принимаю условия политики конфиденциальности</p>
              </div>

              <button className={styles.btn2}>отправить</button>
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

      <div id="Footer">
        <div className={styles.content_box3}>
          <div className={styles.flex_row41}>
            <div className={styles.flex_col23}>
              <div className={styles.info1}>Адрес: г. Томск, Варшавское шоссе 26</div>
              <div className={styles.info11}>Тел: +7 (924) 444-77-77</div>
              <div className={styles.info12}>Email: balans@maiil.ru</div>
              <div className={styles.info3}>Согласие на обработку персональных данных</div>
            </div>

            <div className={styles.flex_col24}>
              <div className={styles.flex_row42}>
                <div className={styles.info2}>Главная</div>
                <div className={styles.info2}>Направления</div>
                <div className={styles.info2}>Прайс</div>
                <div className={styles.info2}>Расписание</div>
                <div className={styles.info2}>Эксперты</div>
                <div className={styles.info2}>Отзывы</div>
                <div className={styles.info2}>FAQ</div>
                <div className={styles.info2}>Контакты</div>
              </div>

              <div className={styles.flex_row43}>
                <img
                  className={styles.image90}
                  src={'/assets/d85f3098824842c89482b0de54aae666.svg'}
                  alt="alt text"
                />
                <h2 className={styles.medium_title2}>BALANCE</h2>
              </div>
            </div>

            <div className={styles.flex_col25}>
              <div className={styles.flex_row44}>
                <img
                  className={styles.image82}
                  src={'/assets/9331a91b80352b56f3f8165d21eddd07.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image82}
                  src={'/assets/89a7f5516519d47826d240ab36552be6.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image82}
                  src={'/assets/5e089864cc84b736c6635eea0a897a4e.svg'}
                  alt="alt text"
                />
              </div>

              <div className={styles.info31}>Политика конфиденциальности</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultPage;
