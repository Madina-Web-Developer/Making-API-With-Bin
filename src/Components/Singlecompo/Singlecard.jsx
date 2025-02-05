import React, { useEffect, useState } from 'react'
import './Singlecard.css'



const Singlecard = () => {

    const [data , setData] = useState([])

    const [countrydata, setCountryData] = useState([])

   
  

    useEffect(()=>{

        fetch('https://api.jsonbin.io/v3/b/67463a37ad19ca34f8d0ec5a')
     .then((response) => response.json())
     .then((json) =>{setData(json.record), setCountryData(json.record)})
    
    },[])

    const handelConbutton = (ButtonData) =>{

        const filterData = data.filter((item) => {

           return item.Country == ButtonData
        })    

        setCountryData(filterData)
    }

   

console.log(data)

  return (

    <>


<nav className='bg-blue-400 px-5'>
   <div className="main">
            <div className="img">
                <img src="public/TT.png" alt="img" />
                <p>Tours & Travels Ltd.</p>
            </div>
          <div className="buttons">
    
            <button onClick={()=>setCountryData(data)}>All Country</button>
            <button onClick={()=>handelConbutton('Bangladesh')} >Bangladesh</button>
            <button onClick={()=>handelConbutton('Pakistan')} >Pakistan</button>
            <button onClick={()=>handelConbutton('Malaysia')} >Malaysia</button>
            <button onClick={()=>handelConbutton('Dubai')}>Dubai</button>
          </div>
        </div>
   </nav>
   

    
     <h3>Explore All Over The World with Us</h3>

    <div className="main_sing">

        {
            countrydata.map((item)=>(

        <div key={item.id} className="single_card">

            <div className="img_div">
                <img src={item.image} alt="img" />
            </div>

            <div className="place">
              <div className="bu">
                        
                        <p className='d'>{item.Discount}</p>
                           
                       </div>  
   
            
                <div className="text">

                    <h1>{item.Placename}</h1>
                    <div className="co">
                    <h1 className='C'>{item.Country}</h1>
                    </div>
                    <p className='text'>{item.Details}</p>

                    
                     <h1 className='cost'>Cost : <span>{item.Cost}</span> </h1> 

                </div>
                
                
            </div>
            
            
        </div>

            ))
        }

    </div>
        

   
    
    
    
    </>
  )
}

export default Singlecard












