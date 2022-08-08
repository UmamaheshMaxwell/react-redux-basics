import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Header from './components/one/Header';
// import ProductDetail from './components/ProductDetail';
// import ProductListing from './components/ProductListing';
import User from './components/users/User';
import Product from './components/users/Product';
import ProductDetail from './components/users/ProductDetail';
import Magazine from './components/magazines/Magazine';
import TeamsComponent from './components/Teams/TeamsComponent';

const Home = () => <div className="container"><h1>Welcome Home</h1></div>
const Error = () => <h1>404 Not found</h1>

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">React Redux</Link>
              <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
                  <Link to="/users" className="nav-item nav-link">Users</Link>
                  <Link to="/products" className="nav-item nav-link">Products</Link>
                  <Link to="/magazines" className="nav-item nav-link">Magazines</Link>
                  <Link to="/teams" className="nav-item nav-link">Teams</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={<User />}></Route>
          <Route path="/magazines" element={<Magazine />}></Route>
          <Route path='/teams' element={<TeamsComponent />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
