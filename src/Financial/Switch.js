import { useState } from 'react'; 
import CurrencyValue from './CurrencyValue'
import MarketStat from './MarketStat';


const Language = () => {
    const [display, setDisplay] = useState('')
    const popup = () => {
        setDisplay(!display)
    }


  return (
    <div>
    
        <div className='popup'>
            <button onClick={popup} className='popup_btn'>
                Filter
            </button>
            {
                display ?
            <div className='popup_value'>
              <div>
                <CurrencyValue />
              </div>
                        <button onClick={popup}>return to market place</button>
                    </div> :
                    <div>
              <div>
                <MarketStat />
              </div>
                    </div> }
        </div>
    </div>
  )
}

export default Language










