import { useState } from 'react'; 
import searcch from '../Assets/search-removebg-preview.png';


const CurrencyValue = () => {

// Api private key
    const Apikey = '88e2718d827479142bb4a06e6bbca911';
    // example of currencies
    const currencies = 'EUR,GBP,CAD,PLN';

 const Search = async () => {
  try {
    const element = document.getElementsByClassName('main_currencies');
    if (element[0].value === '') {
      return 0;
      }
        const Three = document.getElementsByClassName('currencies');
    if (Three[0].value === '') {
    return 0;
    }

    const url = `http://apilayer.net/api/live?access_key=${Apikey}&currencies=${Three[0].value}&source=${element[0].value}&format=1`;

    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  return (
    <div className='container'>
        <h1>Currency Value App</h1>
          <div className='sear'>
        <input type='text' className='currencies' placeholder='EUR,GBP,CAD,PLN - search' />
        <input type='text' className='main_currencies' placeholder='USD - Search' />
          <span onClick={() =>{Search()}} className='search_btn'>
            <img  src={searcch} alt='logo'/>
          </span>
          </div>
    </div>
  )
}

export default CurrencyValue










