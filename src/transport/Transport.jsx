


export function  Transport ({onClick ,myClass, children } ){




    return (

        <button onClick={onClick} className= {myClass} >
            {children}
        </button>

    );

}