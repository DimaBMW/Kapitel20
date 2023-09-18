import React,{useState,useEffect} from "react";
import style from "../../styles/Header_burger.scss"
import Link from "../../../../ui/Link";

function HeaderBurger() {
    const [divClass, setDivClass] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        if (divClass === "") {
          setDivClass("burger-active");
        } else {
          setDivClass("");
        }
      };

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
          setIsVisible(true);
        }else{
            setIsVisible(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


    return(
        <div className={`Burger_container ${isVisible ? "show" : ""}`}>
            <div className="Burger_container__buttonbox">
                <button className={`${divClass} Burger__button`}  onClick={handleClick}>
                    <div className={`${divClass} btn2`}></div>
                </button>
            </div>
            <div className={`${divClass} Burger_container__listbox`}>
                <ul className="navigation__list">
                  <li className="navigation__item">
                    <Link href="#" name="Проекты"/>
                  </li>
                  <li className="navigation__item">
                    <Link href="#" name="О нас" />
                  </li>
                  <li className="navigation__item">
                    <Link href="#" name="Работы" />
                  </li>
                  <li className="navigation__item">
                    <Link href="#" name="Контакты" />
                  </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderBurger;