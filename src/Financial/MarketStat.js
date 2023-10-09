import React, { useState, useEffect } from 'react';
import searcch from '../Assets/search-removebg-preview.png';
import Table from 'react-bootstrap/Table';
import './currency.css'

function ResponsiveExample() {
    const Apikey = '5842a81f8974dbda412ef2e5c691ec37';
  const [data, setData] = useState([]);

    
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
    setData(responseData.data.map(item=>item));
    // setChartData(chartData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
    return (
           <div className='contain'>
      <h1>Market Statistics App</h1>
      <div className='search'>
        <input type='text' className='stock' placeholder='AAPL, MSFT - Search' />
        <span onClick={search} >
          <img src={searcch} alt='logo' />
        </span>
            </div>
        <div className='feeds'>
          <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Opening value</th>
            <th>Adjecent Opening value </th>
            <th>Adjecent High</th>
            <th>High</th>
            <th>Low</th>
            <th>Adjecent Low</th>
            <th>Adjecent Closing value</th>
            <th>Closing value</th>
            <th>Volume</th>
            <th>Adjecent Volume</th>
            <th>Date</th>
          </tr>
        </thead>

          {data &&
                    data.map((item, index) => (
                <tbody>
              <tr key={index}>
                <td style={{background:'#fff'}}>{index + 1}</td>
                    <td style={{background:'#fda172'}} >{item.open}</td>
                    <td style={{background:'#fda132'}} >{ item.adj_open}</td>
                    <td style={{background:'#b0fc38'}} >{ item.adj_high}</td>
                    <td style={{background:'#74b72e'}} >{ item.high}</td>
                    <td style={{background:'#d21404'}}>{ item.low}</td>
                    <td style={{background:'#bc544b'}}>{ item.adj_low}</td>
                    <td style={{ background: item.adj_close > item.adj_open ? '#00FF00' : '#FF0000' }} >{ item.adj_close}</td>
                    <td style={{ background: item.close > item.open ? '#00FF00' : '#FF0000' }}>{ item.close}</td>
                    <td style={{ background: item.close > item.open ? '#00FF99' : '#900d09', color:'#fff' }} >{ item.volume}</td>
                    <td style={{ background: item.close > item.open ? '#00Fe92' : '#680c07', color:'#fff' }}>{ item.adj_volume}</td>
                                        <td style={{background:'#fff'}} >{item.date}</td>
              </tr>
                </tbody>
            ))}

      </Table>
            </div>
      </div>      
  );
}

export default ResponsiveExample;











































