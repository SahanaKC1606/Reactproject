import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <div className='logoblock'>
           <h1>UserManagement</h1>
        </div>
        <div className='menublock'>
            <ol>
               
                <li>
                    <Link>User List</Link>
                </li>
                
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
              
                
            </ol>
        </div>
    </nav>
  )
}

export default Nav