import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 12,
        usePointStyle: true,
        pointStyle: 'circle',
        textAlign: 'center'
      }
    },
    
    title: {
      display: true,
      text: 'Количество заказов',
    },
  },
};

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Наличные',
      borderWidth: 1,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(227,190,30)',
      backgroundColor: 'rgba(227,190,30, 0.5)',
    },
    {
        label: 'Оплата картой',
        borderWidth: 1,
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(133,149,255)',
        backgroundColor: 'rgba(133,149,255, 0.5)',
        
      },
      {
        label: 'Корпоративная оплата',
        borderWidth: 1,
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(21,155,219)',
        backgroundColor: 'rgba(21,155,219, 0.5)',
      },
    
  ],
};

export function SumChart2() {
 
  return <div className='dashboard-line-sum2'><Line id="chart" options={options} data={data} /></div>
}
