import { Footer, Header } from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="font-poppins py-2 px-2 sm:px-8 flex flex-col h-screen gap-52">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}
export default App
