
import {ImageLoh, Welcome} from "./Welcome.jsx"
import './App.css'
import {ReactList} from "./ReactList.jsx";


export  const  Hello=()=>{
    return <>
<ReactList />
 <div className={'text-3xl'} > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, nesciunt. </div>
        <p className={"text-blue-400 underline italic "} > this is tehddd best</p>
    </>

}



//
function App() {
  // const [count, setCount] = useState(0)npm run dev




  return (
    <>
        <main>
<ImageLoh />

            <Hello/>
            <Welcome name="ben"/>
            <Welcome name="evil" type='dangeous'/>
            <Welcome name="demon"/>
        </main>

    </>
  )
}

export default App
