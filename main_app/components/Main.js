import axios from 'axios';
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
function Main({user}) {
 
   useEffect(()=>{
    const cookies = new Cookies();

    axios.get(`https://firestore.googleapis.com/v1/projects/energysaver-6207e/databases/(default)/documents/${user}/${cookies.get('device')}/daily_usage`)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
   })

    return (
        <>
           
dfdfdf
        </>
    )
}

export default Main