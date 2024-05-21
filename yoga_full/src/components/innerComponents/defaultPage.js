import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

const DefaultPage = () => {
  return (
    <>
      <div id="Directions">
        <div className={styles.anchor1}></div>
        <div className={styles.flex_col14}>
          <h2 className={styles.medium_title}>Кундалини-йога</h2>

          <div className={styles.flex_row22}>
            <img className={styles.image37} src={'/assets/d2365435e39536a2ccdd922b5f5f8dda.svg'} alt="alt text" />
            <h5 className={styles.highlight4}>Проходит по: пн, ср, пт</h5>
          </div>

          <div className={styles.flex_row23}>
            <img className={styles.image26} src={'/assets/a7b132a2d12511a5c1a46c31ed321c60.svg'} alt="alt text" />
            <h5 className={styles.highlight41}>Длительность: 60 мин</h5>
          </div>

          <h5 className={styles.highlight13}>
            Сочетает довольно интенсивные упражнения, специальную дыхательную практику, повторяющиеся асаны. <br />
            <br />
            Помогает увеличить уровень энергии и силы, снять напряжение и стресс, улучшить физическую выносливость,
            концентрацию, стимулировать творческий потенциал <br />и привнести глубокий внутренний покой.
            <br />
            <br />
            Кундалини-йога доступна людям любого возраста и физической подготовки.{' '}
          </h5>
          <img className={styles.image351} src={'/assets/735a0b778f870c110a5aace5bbc4d08a.svg'} alt="alt text" />
        </div>

        <div className={styles.group}>
          <img className={styles.image30} src={'/assets/58b2ebd9942365e2c39af1ad87a3dda3.svg'} alt="alt text" />
          <img className={styles.image36} src={'/assets/upward_dog_pose.png'} alt="alt text" />
        </div>

        <div className={styles.flex_col15}>
          <div className={styles.flex_row24}>
            <button className={styles.btn1}>Кундалини-йога </button>
            <div className={styles.text13}>Хатха-йога </div>
          </div>

          <div className={styles.flex_row25}>
            <div className={styles.text13}>Пилатес</div>
            <div className={styles.text13}>Здоровая спина </div>
          </div>

          <div className={styles.flex_row26}>
            <div className={styles.text13}>Флоу-йога </div>
            <div className={styles.text13}>Стретчинг</div>
          </div>
        </div>

        <div className={styles.group1}>
          <h3 className={styles.subtitle}>Не определились с направлением? Мы подскажем!</h3>
          <h1 className={styles.hero_title1}>Все направления в одном абонементе</h1>
        </div>

        <img className={styles.decorator} src={'/assets/0ad68f50bf1d900abd0c3145fea377f9.svg'} alt="alt text" />
      </div>

      <div id="Price" >
        <div className={styles.anchor2}></div>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.flex_row11}>
              <div className={styles.flex_row12}>
                <h1 className={styles.hero_title3}>4</h1>
                <h5 className={styles.highlight11}>занятия в месяц</h5>
              </div>

              <h1 className={styles.hero_title2}>3000₽</h1>
            </div>

            <hr className={styles.line6} size={1} />

            <div className={styles.flex_row13}>
              <div className={styles.flex_row14}>
                <h1 className={styles.hero_title4}>1</h1>
                <h5 className={styles.highlight6}>занятие </h5>
              </div>

              <h1 className={styles.hero_title5}>750₽</h1>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.flex_row15}>
              <div className={styles.flex_row16}>
                <h1 className={styles.hero_title3}>8</h1>
                <h5 className={styles.highlight11}>занятий в месяц</h5>
              </div>

              <h1 className={styles.hero_title2}>5200₽</h1>
            </div>

            <hr className={styles.line7} size={1} />

            <div className={styles.flex_row17}>
              <div className={styles.flex_row14}>
                <h1 className={styles.hero_title4}>1</h1>
                <h5 className={styles.highlight6}>занятие </h5>
              </div>

              <h1 className={styles.hero_title5}>650₽</h1>
            </div>
          </div>

          <div className={styles.item1}>
            <div className={styles.flex_row6}>
              <div className={styles.flex_row18}>
                <h1 className={styles.hero_title3}>12</h1>
                <h5 className={styles.highlight11}>занятий в месяц</h5>
              </div>

              <h1 className={styles.hero_title2}>6600₽</h1>
            </div>

            <hr className={styles.line61} size={1} />

            <div className={styles.flex_row19}>
              <div className={styles.flex_row14}>
                <h1 className={styles.hero_title4}>1</h1>
                <h5 className={styles.highlight6}>занятие </h5>
              </div>

              <h1 className={styles.hero_title5}>550₽</h1>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.flex_row15}>
              <h5 className={styles.highlight12}>безлимит на месяц</h5>
              <h1 className={styles.hero_title2}>8000₽</h1>
            </div>

            <hr className={styles.line7} size={1} />

            <div className={styles.flex_row13}>
              <div className={styles.flex_row20}>
                <h1 className={styles.hero_title4}>1</h1>
                <h5 className={styles.highlight6}>занятие </h5>
              </div>

              <h5 className={styles.highlight7}>зависит от вашей активности</h5>
            </div>
          </div>
        </div>

        <button className={styles.btn}>записаться</button>

        <div className={styles.flex_col12}>
          <h1 className={styles.hero_title21_box}>
            <span className={styles.hero_title21}>
              <span className={styles.hero_title21_span0}>800₽</span>
              <span className={styles.hero_title21_span1}> </span>
            </span>
          </h1>

          <div className={styles.flex_row21}>
            <h1 className={styles.big_title2}>1</h1>
            <h5 className={styles.highlight53}>занятие </h5>
          </div>
        </div>

        <h1 className={styles.hero_title64}>Стоимость наших тренировок</h1>

        <div className={styles.flex_col13}>
          <p className={styles.text12_box1}>
            <span className={styles.text12}>
              <span className={styles.text12_span0}>После покупки абонемента его необходимо </span>
              <span className={styles.text12_span1}>активировать в течении трех месяцев </span>
              <span className={styles.text12_span2}>с момента</span>
              <span className={styles.text12_span3}> приобретения (дата активации - первое занятие).</span>
            </span>
          </p>
          <div className={styles.text210}>Первая тренировка для новых клиентов бесплатная</div>
        </div>

        <img className={styles.decorator4} src={'/assets/03c5add8d8c5d65de18a5764f7269171.svg'} alt="alt text" />
        <img className={styles.decorator6} src={'/assets/a6593f0235e6af69dc2ba333cbaa58c4.svg'} alt="alt text" />
      </div>

      <div id="Schedule" >
        <div className={styles.anchor3}></div>
        <div className={styles.flex_col8}>
          <p className={styles.text12_box}>
            <span className={styles.text12}>
              <span className={styles.text12_span0}>Приглашаем на первое пробное занятие </span>
              <span className={styles.text12_span1}>БЕСПЛАТНО!</span>
              <span className={styles.text12_span2}>
                {' '}
                <br />
                Не упустите возможность попробовать что‑то новое и полезное для вашего здоровья!
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
              <div className={styles.text3}>Понедельник</div>

              <div className={styles.text2}>
                <div className={styles.text21}>Вторник</div>
              </div>

              <div className={styles.text22}>
                <div className={styles.text23}>Среда</div>
              </div>

              <div className={styles.text24}>
                <div className={styles.text25}>Четверг</div>
              </div>

              <div className={styles.text2}>
                <div className={styles.text21}>Пятница</div>
              </div>

              <div className={styles.text2}>
                <div className={styles.text21}>Суббота</div>
              </div>
            </div>

            <hr className={styles.line8} size={1} />
          </div>

          <div className={styles.flex_col11}>
            <hr className={styles.line9} size={1} />

            <div className={styles.flex_row7}>
              <div className={styles.text26}>Хатха-йога </div>
              <div className={styles.text26}>8:00</div>
              <div className={styles.text27}>90 мин</div>
              <div className={styles.text26}>Ирина Беляева</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/50089e988af461c3388e4a6bb53a3859.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />

            <div className={styles.flex_row7}>
              <p className={styles.text28}>Здоровая спина</p>
              <div className={styles.text26}>10:00</div>
              <div className={styles.text27}>60 мин</div>
              <div className={styles.text26}>Ирина Беляева</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/53fbd14d604a135bd1c1d3b4ef7b352c.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />

            <div className={styles.flex_row7}>
              <div className={styles.text26}>Пилатес</div>
              <div className={styles.text26}>12:00</div>
              <div className={styles.text29}>90 мин</div>
              <div className={styles.text26}>Анна Беляева</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/b882802a737e167747df2d4d660c4cfa.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />

            <div className={styles.flex_row9}>
              <div className={styles.text26}>Флоу-йога</div>
              <div className={styles.text26}>14:00</div>
              <div className={styles.text27}>120 мин</div>
              <div className={styles.text26}>Ирина Беляева</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/1d8e6f18858ba0f9dae95151ef010934.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />

            <div className={styles.flex_row7}>
              <div className={styles.text26}>Стретчинг</div>
              <div className={styles.text26}>16:00</div>
              <div className={styles.text27}>80 мин</div>
              <div className={styles.text26}>Анна Беляева</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/8d904e1334af319b4dce5d376ea4233d.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />

            <div className={styles.flex_row7}>
              <div className={styles.text26}>Пилатес</div>
              <div className={styles.text26}>18:00</div>
              <div className={styles.text27}>80 мин</div>
              <div className={styles.text26}>Анна Беляева</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/f16f65c916f24915c1d384e080dd38fc.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />

            <div className={styles.flex_row10}>
              <div className={styles.text26}>Флоу-йога </div>
              <div className={styles.text26}>20:00</div>
              <div className={styles.text29}>80 мин</div>
              <div className={styles.text26}>Мария Смирнова</div>

              <div className={styles.flex_row8}>
                <img
                  className={styles.image7}
                  src={'/assets/016a0ab96033039d0e2f37440814c4c1.svg'}
                  alt="alt text"
                />
                <img
                  className={styles.image7}
                  src={'/assets/7598cc83db3253aeeff791c78976281b.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <hr className={styles.line10} size={1} />
          </div>
        </div>
      </div>

      <div id="Experts">
        <div className={styles.flex_row3}>
          <div className={styles.flex_col}>
            <h1 className={styles.hero_title62}>Эксперты в области тела и разума</h1>

            <div className={styles.flex_row4}>
              <img className={styles.image44} src={'/assets/standing_with_yoga_mat.png'} alt="alt text" />

              <div className={styles.content_box1}>
                <div className={styles.flex_col4}>
                  <h3 className={styles.subtitle1}>Ирина Беляева</h3>
                  <p className={styles.text1}>
                    Йога-инструктор с образованием <br />
                    по специальности “Физическая культура и спорт”, имеет сертификат международного уровня и пять лет
                    практического опыта.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.flex_col5}>
            <p className={styles.text11}>
              Наши инструктора сочетают свои знания и опыт, чтобы создать эффективные и интересные занятия, которые
              помогут вам укрепить мышечный корсет,  достичь гибкости, улучшить осанку и физическую форму.{' '}
            </p>

            <div className={styles.flex_row5}>
              <div className={styles.flex_col6}>
                <img className={styles.image42} src={'/assets/holding_yoga_mat_1.png'} alt="alt text" />
                <h5 className={styles.highlight51}>Анна Беляева</h5>
              </div>

              <div className={styles.flex_col6}>
                <img className={styles.image43} src={'/assets/holding_yoga_mat_2.png'} alt="alt text" />
                <h5 className={styles.highlight52}>Екатерина Волкова</h5>
              </div>

              <div className={styles.flex_col7}>
                <img className={styles.image431} src={'/assets/holding_yoga_mat_3.png'} alt="alt text" />
                <h5 className={styles.highlight51}>Мария Смирнова</h5>
              </div>
            </div>

            <img className={styles.image35} src={'/assets/6b858efc000a486d2679ec522408f562.svg'} alt="alt text" />
          </div>
        </div>

      </div>

      <div id="Feedback">
        <div  className={styles.anchor4}> </div>
        <div className={styles.content_box2}>
          <h5 className={styles.highlight3}>оставить отзыв</h5>
        </div>
        <div className={styles.flex_col3}>
          <h1 className={styles.hero_title61}>Наши довольные клиенты</h1>
          <img className={styles.decorator7} src={'/assets/instructor_profiles.png'} alt="alt text" />
          <img className={styles.image45} src={'/assets/4ce56ddff1a036a1110d680e7d97668b.svg'} alt="alt text" />
        </div>
      </div>

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
