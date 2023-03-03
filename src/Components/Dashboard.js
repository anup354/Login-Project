import React, { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {

  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BRL')
  const [amount, setAmount] = useState(0)
  const [data, setData] = useState('')
  const [result, setResult] = useState(0)

  const [convertTo, setConvertTo] = useState(0)
  const [convetFm, setCOnvertFm] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=8VMIDeevBealARruKVIgsFaAHsWRniCDwcArCfVj`)
      // console.log(response.data.data)
      setData(response.data.data)
      console.log(data)

      // if (fromCurrency === 'USD') {
        Object.keys(data).map((key, i) => {
        //   if (toCurrency === key) {
        //     console.log(key)
        //     setResult(amount * data[key])
        //   }
        // })
        if (toCurrency === key) {
          setConvertTo(data[key])
          console.log("firstif")
        }
        if(fromCurrency===key)
          {
            console.log("secondif")
            console.log("fromkey",key)
            console.log("fromkey",data[key])
            setCOnvertFm(data[key])
            console.log(convertTo)
          }
          const result=(amount/convetFm)*convertTo
          setResult(result)
      })
      // }
      // else {
      //   alert("Not available")
      // }
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      <div>
        <marquee>
          Dashboard
        </marquee> 
      </div>
      <div className='text-xl flex justify-center '>
        <div className='border text-md w-80 h-auto p-5 bg-white drop-shadow-lg mt-20'>
          <form
            onSubmit={handleSubmit}>
            <fieldset>
              <legend className='text-center mb-2 font-bold'>Currency Convert</legend>
              <div >
                <label>Enter Amount</label><br />
                <input
                  type='number'
                  name="value"
                  placeholder='amount'
                  className='border p-2 w-full mt-2 rounded-md'
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className='flex pt-2 m-2'>
                  <div className=''>
                    <span>From</span>
                    <select
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className='w-full p-2  border mt-2 rounded-lg'>
                      <option>USD</option>
                      <option>AUD</option>
                      <option>BGN</option>
                      <option>BRL</option>
                      <option>CAD</option>
                    </select>
                  </div>
                  <div className='ml-8'>
                    <span>To</span>
                    <select
                      onChange={(e) => setToCurrency(e.target.value)} className='w-full p-2  mt-2 border rounded-lg'
                    >
                      <option >BRL</option>
                      <option>CAD</option>
                      <option>BGN</option>
                      <option>AUD</option>
                      <option>USD</option>
                    </select>
                  </div>

                </div>
                <div className='m-2'>
                  <span>{result}</span>
                </div>
                <button className='w-full border mt-2 p-2 bg-blue-800 text-white rounded-lg' type='submit'>Calculate</button>
              </div>
            </fieldset>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Dashboard