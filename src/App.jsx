
import { About } from './components/about/About'
import { Bookings } from './components/booking/Bookings'
import { Brand } from './components/brand/Brand'
import { Contact } from './components/contact/Contact'
import { Destination } from './components/destination/Destination'
import { Footer } from './components/footer/Footer'
import Header from './components/Header/Header'
import { Testimonies } from './components/testimonies/Testimonies'
// import Home from './pages/Home'

function App() {


  return (
    <div className="w-screen">
        <Header />
       <main className='mt-[5rem] w-screen flex flex-col items-center'>
         <About />
         <Destination />
         <Bookings />
         <Testimonies />
         {/* <Brand /> 
          <Contact /> */}
       </main>
       <Footer />
    </div>
  )
}

export default App
