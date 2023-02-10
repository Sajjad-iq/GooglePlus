import { AppWrapper } from "./AppWrapper"
import { Aside } from "./Layout/Aside"
import { Nav } from "./Layout/Nav"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SplitScreen } from "./Components/shared/splitScreen";
import { Footer } from "./Layout/Footer";
import { Home } from "./Pages/Home";
import { ActiveToggle } from "./services/AddPostServices/PostsScreenToggle";

function App() {
  const { IsPageActive, Toggle } = ActiveToggle()

  return (
    <AppWrapper>
      <BrowserRouter>

        <SplitScreen
          header={<Nav MenuButtonHandler={Toggle} />}
          left={<Aside IsPageActive={IsPageActive} />}

          right={
            <Routes>
              <Route path="/GooglePlus/" element={<Home />} />
            </Routes>
          }
          footer={<Footer />}
        />
      </BrowserRouter >
    </AppWrapper>
  )
}

export default App
