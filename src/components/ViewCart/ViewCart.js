import React, { useEffect } from 'react'

export default function ViewCart() {
   
        const data=JSON.parse(localStorage.getItem("cartdata"))
        var value=new Array(data.len).fill(0);
          data.map((datas,index)=>{
            value[index]=Number(datas.price)*Number(datas.quantity);
      })
       
           
    // const data=JSON.parse(localStorage.getItem("cartdata"));
  return (
    <div>info  {data.map((datas,index)=>(
        <>
        
     <h1>Title:{datas.title}</h1>
     <h2>Price:{datas.price}</h2><h2>Quantity:{datas.quantity}</h2>
        {value[index]?
      <>
     Total Price: {value[index]}
    </>    :""
    }
  
     </>

    ))
  


}
</div>
  )
}
