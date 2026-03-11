
import {MyButton} from "./Button.jsx";
import {DesighFile} from "./DesighFile.jsx";
import Product from "./product.jsx";

import {List} from "./List.jsx";

export const Welcome=({name, type="nutural"})=>{
    return <>
    <h1>  react  is {name} <br/>  the type is {type} </h1>
    </>
}

export const ImageLoh=()=>{
    return <>
<List/>
        <Product  name={'tomtom'} type={'white'} owner={'ben'}>
        </Product>
<Product  name={'tomtom'} type={'white'} owner={'ben'}>
<div className={'text-green-400 text-2xl '} > i love japan</div>
</Product>


        <p>{name}</p>
        <MyButton  />
    <img src={"test.jpg"}  width='20px' alt={'good'} />
    </>
}