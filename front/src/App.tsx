import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BusinessPage } from './Pages/BusinessPage'
import { CEOPage } from './Pages/CEOPage'
import { IntroductionPage } from './Pages/IntroductionPage'
import { TopPage } from './Pages/TopPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopPage />
  },
  {
    path: 'introduction',
    element: <IntroductionPage />
  },
  {
    path: '/CEO',
    element: <CEOPage />
  },
  {
    path: '/business',
    element: <BusinessPage />
  },
],
  {
    basename: '/hp',
  })

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
