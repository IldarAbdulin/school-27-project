import React from 'react';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__name}>О НАC</h1>
      <h2 className={styles.about__history}>По лестнице истории</h2>
      <div className={styles.main}>
        <p className={styles.main__head_title}>
          <span>Так</span> тянется к теплу, добру и свету – Души ребёнка
          трепетный росток! Средь непогод житейских путь к расцвету И труден, и
          тревожен, и далёк… Но сердце юное не знает зла и скуки И тонет мир в
          распахнутых глазах… И детские доверчивые руки Сжимает школа бережно в
          руках.
        </p>
        <p className={styles.main__gorkiy}>
          Не зная прошлого – невозможно понять подлинный смысл настоящего и цели
          будущего. (М. Горький)
        </p>
        <p className={styles.main__title}>
          <span>История</span> школы №27 неразрывно связана с историей нашей
          страны, нашего города. Ее построили в 1944 году. 20 сентября 1944 года
          Приказом городского отдела образования города Фрунзе была открыта
          начальная школа №27. Под школу было отведено, стоящее в самом центре
          города, маленькое ветхое одноэтажное здание, всего три класса. Оно не
          было приспособлено для учебного процесса: узкие коридоры, печное
          отопление, отсутствие водопровода и канализации. Страна переживала
          тяжелое время, шел четвертый год Великой Отечественной войны. Не
          смотря на это, страна думала о будущем молодого поколения и открывала
          школы. Были трудности с учебниками, школьным оборудованием, не хватало
          учителей. Образовательная система, сложившаяся в нашей стране стала
          главным достижением в ХХ веке. Культ образования и знаний приносил
          свои плоды. В послевоенный период, когда многие семьи с трудом сводили
          концы с концами, в каждом доме была книжная полка, а родители на
          последние сбережения собирали своих детей в школу. Директором школы
          была назначена учитель начальных классов средней школы №23 города
          Фрунзе Юникова Анна Петровна. В этом году пришли работать в школу:
          Макрак А.К., Маликова П.Г., Бенедиктова Р.А., Фаставец Т.М. Благодаря
          огромной организаторской работе администрации и педагогического
          коллектива, налаживалась школьная жизнь.В школе было тесновато,
          особенно в дождливую погоду. В школе не было ни актового зала, ни
          спортзала. Отсутствовала даже столовая.
        </p>
      </div>
    </div>
  );
};
