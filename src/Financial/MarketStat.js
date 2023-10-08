import React, { useState, useEffect } from 'react';
import searcch from '../Assets/search-removebg-preview.png';
import { Line } from 'react-chartjs-2';

import Table from 'react-bootstrap/Table';

function ResponsiveExample() {
    const Apikey = '5842a81f8974dbda412ef2e5c691ec37';
  const [chartData, setChartData] = useState(null);

  const search = async () => {
  try {
    const elementT = document.getElementsByClassName('stock');
    if (elementT[0].value === '') {
      return 0;
    }

    const baseURL = 'http://api.marketstack.com/v1/eod';
    const Request = `${baseURL}?access_key=${Apikey}&symbols=${elementT[0].value}`;

    const resp = await fetch(Request);

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await resp.json();
    console.log(responseData);
const openValues = responseData.data.map(item => item.open);
const closeValues = responseData.data.map(item => item.close);
      const high = responseData.data.map(item => item.high);
      const low = responseData.data.map(item => item.low);
      const volume = responseData.data.map(item => item.volume);
const adj_openValues = responseData.data.map(item => item.adj_open);
const adj_closeValues = responseData.data.map(item => item.adj_close);
      const adj_high = responseData.data.map(item => item.high);
      const adj_low = responseData.data.map(item => item.adj_low);
      const adj_volume = responseData.data.map(item => item.adj_volume);
        const date = responseData.data.map(item => item.date);
    setChartData(chartData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
    return (
           <div>
      <h1>Market Statistics App</h1>
      <div className='search'>
        <input type='text' className='stock' placeholder='AAPL - Search' />
        <span onClick={search} className='search_btn'>
          <img src={searcch} alt='logo' />
        </span>
            </div> 
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
                </Table>
      </div>      
  );
}

export default ResponsiveExample;











































