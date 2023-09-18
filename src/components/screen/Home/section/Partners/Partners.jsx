import React from "react";
import styles from "../../styles/Partners/Partners.module.scss";
import Slaider from "../../../../Slaider/Slaider";
import Text from "../../../../ui/text";
import Title from "../../../../ui/title";
import Image from "../../../../ui/Image";

import img1 from "../../../../../assets/img/Slaider/DomRU.svg";
import img2 from "../../../../../assets/img/Slaider/JUNIOR.svg";
import img3 from "../../../../../assets/img/Slaider/MTC.svg";
import img4 from "../../../../../assets/img/Slaider/ROSSETI.svg";

const Partners = () => {
  return (
    <section className={styles.partners} id="partners">
      {/* <div className={styles.partners_container}>
                <div className={styles.partners_container__textBox}>
                    <Title level={1} className="slaider__title" text="с нами работают, нам доверяют"/>
                    <Text className="slaider__text" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/> 
                </div>
                <div className={styles.partners_container__slaider}>
                    <Slaider/>
                </div>
            </div> */}
      <div className={styles.partners_container2__textBox}>
        <Title
          level={1}
          className="slaider__title"
          text="НАШИ КЛИЕНТЫ"
        />
      </div>
      <div className={styles.partners_container2}>
        <div className={styles.partners__container2_box}>
            <Image src={img1} alt="DomRU" className="imgpartner2"/>
            <Image src={img2} alt="DomRU" className="imgpartner2"/>
            <Image src={img3} alt="DomRU" className="imgpartner2"/>
            <Image src={img4} alt="DomRU" className="imgpartner2"/>
            <Image src={img2} alt="DomRU" className="imgpartner2"/>
            <Image src={img3} alt="DomRU" className="imgpartner2"/>
            <Image src={img1} alt="DomRU" className="imgpartner2"/>
            <Image src={img4} alt="DomRU" className="imgpartner2"/>
            <Image src={img2} alt="DomRU" className="imgpartner2"/>
            <Image src={img3} alt="DomRU" className="imgpartner2"/>
            <Image src={img4} alt="DomRU" className="imgpartner2"/>
            <Image src={img1} alt="DomRU" className="imgpartner2"/>
            <Image src={img2} alt="DomRU" className="imgpartner2"/>
            <Image src={img4} alt="DomRU" className="imgpartner2"/>
            <Image src={img1} alt="DomRU" className="imgpartner2"/>
            <Image src={img3} alt="DomRU" className="imgpartner2"/>
            <Image src={img1} alt="DomRU" className="imgpartner2"/>
            <Image src={img2} alt="DomRU" className="imgpartner2"/>
            <Image src={img1} alt="DomRU" className="imgpartner2"/>
            <Image src={img4} alt="DomRU" className="imgpartner2"/>
        </div>
      </div>
    </section>
  );
};

export default Partners;
