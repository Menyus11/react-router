import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Ez a Home tartalma ...</h2>
}

function Elso() {
  return <h2>Ez az első oldal tartalma ...</h2>
}

function Masodik() {
  return <h2>Ez a második oldal tartalma ...</h2>
}

function NotFound() {
  return <h2>Ez a harmadik oldal tartalma ...</h2>
}

function App() {
  return (
    <div className="App">
      <h1 className='bg-success mb-0'>Valami</h1>

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <nav>
              <Link to="/" className='text-light m-3' style={{textDecoration: "none", fontSize: "1.5vw"}} ><b>Home</b></Link>
              <Link to="elso" className='text-light m-3' style={{textDecoration: "none", fontSize: "1.5vw"}} ><b>Első</b></Link>
              <Link to="masodik" className='text-light m-3' style={{textDecoration: "none", fontSize: "1.5vw"}} ><b>Második</b></Link>
              <Link to="harmadik" className='text-light m-3' style={{textDecoration: "none", fontSize: "1.5vw"}} ><b>Harmadik</b></Link>
            </nav>
          </div>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/elso" element={<Elso />} />
          <Route path="/masodik" element={<Masodik />} />
          <Route path="/harmadik" element={<NotFound />} />
        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
