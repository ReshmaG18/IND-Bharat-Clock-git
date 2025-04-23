import "./App.css"
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // console.log("App component painted");
  return <div>
  <center>
 <ClockHeading></ClockHeading>
 <ClockSlogan></ClockSlogan>
 <CurrentTime/>
 </center>
  </div>
}

export default App
