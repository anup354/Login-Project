import React from "react"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  function logout()
  {
    localStorage.clear();
    navigate('/')
    

  }
  return (
    <>

      <header className="pl-[220px] text-center sticky shadow-md" >
       
      <ul className='flex float-right  bg-white text-black justify-end  w-full  h-16 py-3 shadow-md pr-6'>
          <li> 
          <Icon icon="clarity:notification-solid" className="text-2xl mt-2 mr-5" />
          </li>
          <li> 
          <Icon icon="material-symbols:sms-rounded"  className="text-2xl mt-2 mr-5" />
          </li>
          
          <li> 
          <Icon icon="material-symbols:account-circle"  className="text-2xl mt-2 mr-5" />
          </li>
         

          <li>

          <Icon icon="mdi:logout" className="text-2xl mt-2 mr-5" onClick={logout}/>
          </li>
          <li className="pt-2"><span >Hi,Admin</span></li>
          
        </ul>
        
      </header>
      <br />

    </>
  )
}

export default Navbar