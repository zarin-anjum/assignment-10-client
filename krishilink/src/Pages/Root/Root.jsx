import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

        <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Root
