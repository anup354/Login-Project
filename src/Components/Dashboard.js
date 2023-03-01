import React, { useState } from 'react'


const Dashboard = () => {

  return (
    <div>


        <div>Dashboard </div>
      <div className='text-xl flex justify-center '>
        <div className='border text-md w-80 h-auto p-5 bg-white drop-shadow-lg mt-20'>
          <form>
            <fieldset>
              <legend className='text-center mb-2 font-bold'>Currency Convert</legend>

              <div >
                <label>Enter Amount</label><br />
                <input type='number' name="value" placeholder='amount' className='border p-2 w-full mt-2 rounded-md' />
                <div className='flex pt-2 m-2'>
                  <div className=''>
                    <span>From</span>
                    <select className='w-full p-2  border mt-2 rounded-lg'>
                      <option>USD</option>
                      <option>EURO</option>
                      <option>USD</option>
                      <option>USD</option>
                      <option>USD</option>
                    </select>
                  </div>
                  <div className='ml-8'>
                    <span>To</span>
                    <select className='w-full p-2  mt-2 border rounded-lg'>
                      <option>USD</option>
                      <option>EURO</option>
                      <option>USD</option>
                      <option>USD</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>
                <div className='m-2'>
                  <span>150</span>
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