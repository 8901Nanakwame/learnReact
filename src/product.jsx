// creating for project

const Product=({ name, type, owner, children})=>{

    return <>
<div className={'bg-white/30 mt-8 max-w-max '}>

<p>the name of the project is {name}</p>
<p>the type of the project is {type}</p>
<p>the owner of the project is {owner}</p>

    <div>{children} </div>
</div>
    </>
}
export default Product