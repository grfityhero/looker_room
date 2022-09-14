import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import "./styles/app.css"
import "./styles/variable.css"
// import "./fonts/._Rubik-Bold.ttf"
// import "./fonts/._Rubik-Regular.ttf"
// import "./fonts/._Rubik-VariableFont_wght.ttf"
// import "./fonts/Rubik-Bold.ttf"
// import "./fonts/Rubik-Regular.ttf"
// import "./fonts/Rubik-VariableFont_wght.ttf"

export default function App() {
  return (<>
    <Router>
      <Routing />
    </Router>
  </>
  );
}