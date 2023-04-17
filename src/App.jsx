import { Route, Routes } from "react-router-dom"
import { Layout, LandingPage, Courses, Services, Blogs, AboutUs, ContactUs, SignUp, ForgotPassword, SingleCourse } from './components';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route exact index element={<LandingPage />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/courses/:id' element={<SingleCourse />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/about_us' element={<AboutUs />} />
        <Route exact path='/contact_us' element={<ContactUs />} />
        
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default App

/*

*/
