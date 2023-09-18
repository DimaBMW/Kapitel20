import React from "react";
import Styles from "../../styles/ProjectDerictories/ProjectDerictories2.0.module.scss";
import Title from "../../../../ui/title";
import Projects from "./Projects";
import img1 from "../../../../../assets/img/ProjectCard/Stadion.jpg";
import img2 from "../../../../../assets/img/ProjectCard/SolceBatareya.jpg";
import img3 from "../../../../../assets/img/ProjectCard/elevator.jpg";

const ProjectDerict20 = () => {
    
  let Usermass = [
    "Топографическая съемка 435 га. Масштаб 1:500,",
    "Топографическая съемка 3 га с применением трассопоискового оборудования",
    "Разработка проекта планировки территории.",
    "Разработка проекта межевания территории.",
    "Сопровождение согласования проекта планировки, совмещенного с проектом межевания территории (участие в публичных слушаниях)",
  ];

  return (
    <section className={Styles.ProjectDerict20}>
      <div className={Styles.ProjectDerict20_container}>
        <div className={Styles.ProjectDerict20_container_titleBox}>
          <Title
            text="ВЫПОЛНЕННЫЕ ОБЪЕКТЫ"
            level={1}
            className="title__projectderict20"
          />
        </div>
        <div className={Styles.ProjectDerict20_container_projectBox}>
          <Projects
            src={img1}
            title="СТАДИОН ФК КРАСНОДАР"
            text="В 2016 году в составе PMK GROUP осуществляла геодезические работы на стадионе ФК Краснодар, для монтажа LED -экранов по всему эллипсу стадиона, а так же выполняла геодезический контроль для установки стеклянных ограждений на всей территории стадиона"
            list={0}
          />
          <Projects
            src={img2}
            title="СТАРОМАРЬЕВСКАЯ СОЛНЕЧНАЯ ЭЛЕКТРОСТАНЦИЯ"
            text="Комплекс инженерных изысканий под строительство Старомарьевской солнечной электростанции по адресу: Ставропольский край, ст. Старомарьевская"
            list={1}
            countlist={5}
            listmass={Usermass}
          />
          <Projects
            src={img1}
            title="СТАДИОН ФК КРАСНОДАР"
            text="В 2016 году в составе PMK GROUP осуществляла геодезические работы на стадионе ФК Краснодар, для монтажа LED -экранов по всему эллипсу стадиона, а так же выполняла геодезический контроль для установки стеклянных ограждений на всей территории стадиона"
            list={0}
          />
          <Projects
            src={img3}
            title="СТРОИТЕЛЬСТВО ЗЕРНОХРАНИЛИЩА НА 2500 ТОНН"
            text="Комплекс инженерных изысканий под строительство Старомарьевской солнечной электростанции по адресу: Ставропольский край, ст. Старомарьевская"
            list={1}
            countlist={5}
            listmass={Usermass}
          />
          <Projects
            src={img1}
            title="СТАДИОН ФК КРАСНОДАР"
            text="В 2016 году в составе PMK GROUP осуществляла геодезические работы на стадионе ФК Краснодар, для монтажа LED -экранов по всему эллипсу стадиона, а так же выполняла геодезический контроль для установки стеклянных ограждений на всей территории стадиона"
            list={0}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDerict20;
