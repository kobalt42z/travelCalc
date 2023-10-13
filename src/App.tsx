import './App.css'
import { initializeApp , FirebaseOptions} from "firebase/app"

const firebaseConfig:FirebaseOptions = {
  apiKey:"AIzaSyAFLq83BUXGZCF_x26mbbWAoMxFiDBNgME",
  projectId:"travelcalc-a1dd9",
}

function App() {
  const app = initializeApp(firebaseConfig)
  return (
    <></>
  )
}

export default App
