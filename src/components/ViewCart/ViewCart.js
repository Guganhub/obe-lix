import React, { useEffect } from 'react'
import usrdata from "../../Data/Login.json"

export default function ViewCart() {
   
        const data=JSON.parse(localStorage.getItem("cartdata"))
        var userdata=JSON.parse(localStorage.getItem("userdata"))
        if (!userdata) {
          userdata = usrdata.data;
        }
        var value=new Array(data.len).fill(0);
          data.map((datas,index)=>{
            value[index]=Number(datas.price)*Number(datas.quantity);

      })
       
           
    // const data=JSON.parse(localStorage.getItem("cartdata"));
  return (
//     <div>info  {data.map((datas,index)=>(
//         <>
        
//      <h1>Title:{datas.title}</h1>
//      <h2>Price:{datas.price}</h2><h2>Quantity:{datas.quantity}</h2>
//         {value[index]?
//       <>
//      Total Price: {value[index]}
//     </>    :""
//     }
  
//      </>

//     ))
  


// }
// </div>


<div className=" ">
{userdata.role === "adm" ? (
          <>
         <h2>Your orders</h2>
   

          
          </>
        ) : (
          " "
        )}
        {userdata.role === "usr" ? (
          <>
         <h2>Your cart</h2>
   

          
          </>
        ) : (
          " "
        )}
<div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-5">
  {data.map((datas, index) => (
    <div className="col">
      <div className="card h-100">
        <img src={datas.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{datas.title}</h5>
          <p className="card-text">{datas.content}</p>
          <p className="card-text">Rs:{datas.price}</p>
                {value[index]?
      <>
     Total Price: {value[index]}
    </>    :""
    }
         
        
        </div>
      </div>
    </div>
  ))}
</div>
</div>
  )
}
