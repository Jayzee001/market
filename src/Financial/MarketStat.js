import React, { useState, useEffect } from 'react';
import searcch from '../Assets/search-removebg-preview.png';
import Table from 'react-bootstrap/Table';
import jsPDF from 'jspdf';
import './currency.css';

function ResponsiveExample() {
  const Apikey = '33895386b305dafa647db19d594ca326';
  const [data, setData] = useState([]);
  const [elementT, setElementT] = useState('');
  
  const search = async () => {
    try {
      const elementTValue = document.querySelector('.stock').value;
      if (!elementTValue) {
        return;
      }

      const Request = `http://api.marketstack.com/v1/eod?access_key=${Apikey}&symbols=${elementTValue}`;
      const resp = await fetch(Request);

      // if (!resp.ok) {
      //   throw new Error('Network response was not ok');
      // }

      const responseData = await resp.json();
      console.log(responseData);
      setData(responseData.data.map(item=>item));
      const jsonData = await resp.json();
      const quotes = jsonData.quotes;
      setData(quotes);
      setElementT(elementTValue);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const generatePDF = () => {
    const unit = 'pt';
    const size = 'A4'; // Use A1, A2, A3 or A4
    const orientation = 'portrait'; // 'landscape' or 'portrait'
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    const title = `Stock Report of ${elementT}`;
    const headers = [['#', 'Opening Value', '...', 'Date']];

    const dataForTable = data.map((item, index) => [
      index + 1,
      item.open,
      item.close,
      item.volume,
      item.date,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: dataForTable,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`stock_report_${elementT}.pdf`);
  };

  return (
    <div className='contain'>
      <h1>Market Statistics App</h1>
      <div className='search'>
        <input type='text' className='stock' placeholder='AAPL, MSFT - Search' />
        <span className='btn' onClick={search}>
          <img src={searcch} alt='logo' />
        </span>
      </div>
      <div className='feeds'>
        <Table responsive='sm'>
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
                      <tbody id='stock'>
              <tr key={index}>
                <td className='' style={{background:'#fff'}}>{index + 1}</td>
                    <td className='copy' style={{background:'#fda172'}} >{item.open}</td>
                    <td className='' style={{background:'#fda132'}} >{ item.adj_open}</td>
                    <td className='' style={{background:'#b0fc38'}} >{ item.adj_high}</td>
                    <td className='copy' style={{background:'#74b72e'}} >{ item.high}</td>
                    <td className='copy' style={{background:'#d21404'}}>{ item.low}</td>
                    <td className='' style={{background:'#bc544b'}}>{ item.adj_low}</td>
  <td className='' style={{ background: item.adj_close > item.adj_open ? '#00FF00' : '#FF0000' }} >{item.adj_close}</td>
  <td className='copy' style={{ background: item.close > item.open ? '#00FF00' : '#FF0000' }}>{item.close}</td>
<td className='copy' style={{ background: item.close > item.open ? '#00FF99' : '#900d09', color: '#fff' }} >{item.volume}</td>
<td className='' style={{ background: item.close > item.open ? '#00Fe92' : '#680c07', color: '#fff' }}>{item.adj_volume}</td>
<td className='copy' style={{background:'#fff'}} >{item.date}</td>
              </tr>
                </tbody>
            ))}
        </Table>
      </div>
      <button className='download' onClick={generatePDF}>
        Download as PDF
      </button>
    </div>
  );
}

export default ResponsiveExample;
