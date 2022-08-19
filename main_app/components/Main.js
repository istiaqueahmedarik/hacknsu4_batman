import axios from 'axios';
import {
    CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from 'chart.js';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Cookies from 'universal-cookie';
function Main({user}) {
    const [dt,setdt] = useState({})
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      const data = {
        x,
        datasets: [
          {
            label: 'Dataset 1',
            data: y,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
        ],
      };
      
     
      
 
   var x = []
   var y = []
    const cookies = new Cookies();

    axios.get(`https://firestore.googleapis.com/v1/projects/energysaver-6207e/databases/(default)/documents/${user}/${cookies.get('device')}/daily_usage`)
  .then(function (response) {
    // handle success
    setdt(response.data.documents[0].fields)
    console.log(typeof dt)
    
      Object.keys(dt).map(function(key, index) {
        x.push(dt[key]?.arrayValue.values[0])
        y.push(dt[key]?.arrayValue.values[1])

      })
      console.log(x)
    })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


    return (
        <>
        
        <Line options={options} data={data} />
        </>
    )
}

export default Main