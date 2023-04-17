import { Route, Routes } from "react-router-dom"
import { Layout, LandingPage, Courses, Services, Blogs, AboutUs, ContactUs, SignUp, ForgotPassword, SingleCourse } from './components';

function App() {

  return (
    <Routes>
      <Route path="/spacity-app" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route exact path='/spacity-app/courses' element={<Courses />} />
        <Route exact path='/spacity-app/courses/:id' element={<SingleCourse />} />
        <Route exact path='/spacity-app/services' element={<Services />} />
        <Route exact path='/spacity-app/blogs' element={<Blogs />} />
        <Route exact path='/spacity-app/about_us' element={<AboutUs />} />
        <Route exact path='/spacity-app/contact_us' element={<ContactUs />} />
        
        <Route exact path='/spacity-app/signup' element={<SignUp />} />
        <Route exact path='/spacity-app/forgot-password' element={<ForgotPassword />} />
      </Route>
      </Routes>
  )
}

export default App

/*

*/
