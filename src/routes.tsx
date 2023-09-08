import { Routes as ReactRouterRoutes, Route } from "react-router-dom"
import { Home, NotFound } from "./pages"

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/website" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
  )
}

export default Routes
