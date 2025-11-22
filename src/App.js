import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { StateProvider } from "./context/StateContext";
import reducer, {initialState} from "./context/Reducer.js";
import AllRoutes from "./AllRoutes/index.jsx";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AllRoutes />
    </StateProvider>
  );
}

export default App;
