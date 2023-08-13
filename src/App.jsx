import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <div className='flex min-h-screen'>
        <SideMenu />
        <section className='flex flex-col grow'>
          <Navbar />
          <Dashboard />
        </section>
      </div>
    </main>
  )
}

export default App
