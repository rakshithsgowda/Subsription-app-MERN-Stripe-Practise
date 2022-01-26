import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul className='nav nav-tabs border '>
        <li className='nav-item '>
          <Link className='nav-link' aria-current='page' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/register'>
            Sign-Up
          </Link>
        </li>
        <li className='nav-item '>
          <Link className='nav-link' to='/login'>
            Sign-In
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
