import { Footer, Header } from "./components"
import Routes from "./routes"

const App = () => {
  return (
    <div className="font-poppins xs:py-2 sm:py-10 xs:px-1 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 flex flex-col h-screen gap-52">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}
export default App
