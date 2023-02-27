import { Outlet, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='flex justify-between gap-4 items-center px-24 h-14 bg-black'>
          <ul>
            <li>
              <Link to='/'>
                <img
                  className='w-16'
                  src='https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png'
                  alt='logo'
                />
              </Link>
            </li>
          </ul>
          <ul className='flex gap-5 '>
            {' '}
            <li className='bg-white w-22 px-3 py-1 rounded-lg '>
              <Link to='/'>Home</Link>
            </li>
            <li className='bg-white w-22 px-3 py-1 rounded-lg '>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='bg-white w-22 px-3 py-1 rounded-lg '>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default NavBar
