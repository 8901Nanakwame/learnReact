// children classes in react
import styles from './NewButton.module.css'
export  function NewButton({topClick, type='success', children }) {

    function handleClicK (e){

  console.log( 'i am a ',e.target)
  console.log( 'i am a ',e.clientX)
  console.log( 'i am a ',e.type)
  console.log( 'i am a ',e.button)

    }

    return <>
    <button  itemID={topClick}  className={` ${styles[type]}` } onClick={handleClicK} >
        i he {children}
    </button>

    </>


}

