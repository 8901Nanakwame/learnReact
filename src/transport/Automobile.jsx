import styles from "./../NewButton.module.css";
import {Transport} from "./Transport.jsx";

export function Automobile({ type }) {

    const auto = [
        {
            name: "bugati",
            type: "sport",
            factory: "volkwagon",
            origin: "italy"
        },
        {
            name: "machback",
            type: "casual",
            factory: "Mercedes Benz",
            origin: "Germany"
        },
        {
            name: "landcouser",
            type: "luxury",
            factory: "toyota",
            origin: "japan"
        },
        {
            name: "bentery",
            type: "luxury",
            factory: "msi",
            origin: "USA"
        }
    ];


    const  autoFilter=auto.filter(car =>car.type === type)


    const  handleClick =()=>{
        alert('fuck u all')
    }

    return(
    <>
        {autoFilter.map((car,index)=>
        <Transport key={index}  onClick={handleClick} myClass={`${car.type =='luxury' ? styles.success :styles.error} mb-2 `}  >
          i am the best among the worlds  {car.name}

        </Transport>
        )}
    </>);

}