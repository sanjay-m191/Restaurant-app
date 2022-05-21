import './style.css'
import { useState, useEffect } from 'react'

export default function Menu (){
    const [menu, updateMenu] = useState([]);
    useEffect(() => {
        fetch('https://json.extendsclass.com/bin/e05275916588')
        .then((res) => res.json())
        .then((jsonRes) => updateMenu(jsonRes))
    }, [])

    console.log(menu);

    return (
    
    <div className="menuContainer">
                
        {menu.map((currItem,indx) => {


            return (


                <div  key={indx} className="menuItems">
                    <h2>{currItem.name} </h2>
                    <p>{currItem.dsc} </p>
                    

                </div>
    
)

        })


        }
    </div>
    )
}