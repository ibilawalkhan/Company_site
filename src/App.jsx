import { Outlet } from 'react-router-dom'
import {
  Header,
  Footer
} from './components/index'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-[#11112B] text-white">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App