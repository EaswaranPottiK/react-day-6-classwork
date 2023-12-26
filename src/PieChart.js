import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


const PieChart = (prop) => {
  
    ChartJS.register(ArcElement, Tooltip, Legend);
    
    const data = {
        labels: ['Interest','Principle'],
        datasets: [
          {
            label: '# of Votes',
            data: [prop.apm, prop.loanAmout],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <div style={{marginRight:'20%',width:'500px'}}>
      <h3 style={{textAlign:'center'}}>Monthly Payment {prop.apm}</h3>
        <Pie data={data} />;
    </div>
  )
}

export default PieChart