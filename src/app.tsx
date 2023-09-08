import { Footer, Header } from "./components"
import Routes from "./routes"

const App = () => {
  return (
    <div className="font-poppins py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96 flex flex-col h-screen gap-52">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}
export default App
