import { AppWrapper } from "./AppWrapper"
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import { SignUp } from "./Pages/Auth/AuthPages/SignUp/Index";
import { SignIn } from "./Pages/Auth/AuthPages/SignIn";
import { Home } from "./Pages/Home";
import { SplitScreen } from "./SplitScreen";
import Profile from "./Pages/Profile";
import { Settings } from "./Pages/Settengs";
import { useEffect } from "react";
import { PostPreview } from "./Pages/PostPreview";

function App() {

  const Navigate = useNavigate()

  useEffect(() => {
    try {
      let User = JSON.parse(localStorage.getItem('User') || "");
      User.Email == "" && User.Password == "" ? Navigate("/SignIn") : Navigate("/")
    } catch {
      Navigate("/SignIn")
    }

  }, [])

  return (
    <AppWrapper>

      <AuthContextProvider>
        <Routes>

          <Route path="/" element={<SplitScreen />} >
            <Route path="" element={<Home />} />
            <Route path="/Profile" element={<Profile />} >

            </Route>
          </Route>
          <Route path="/Settings" element={<Settings />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Posts" element={<PostPreview />} />
        </Routes>
      </AuthContextProvider>

    </AppWrapper>
  )
}

export default App
