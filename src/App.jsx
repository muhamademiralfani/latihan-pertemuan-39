import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DynamicImport from './pages/DynamicImport';
import ImportOnVisibility from './pages/ImportOnVisibility';
import ListVirtualization from './pages/ListVirtualization';
import BlogDetail from './pages/BlogDetail';
import Cache from './pages/Cache';

const App = () => {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <ul className='navbar-nav'>
                <li className='nav-item me-2'>
                  <Link className='"nav-link' to={'/'}>
                    Home
                  </Link>
                </li>
                <li className='nav-item me-2'>
                  <Link className='"nav-link' to={'/dynamic-import'}>
                    Dynamic Import
                  </Link>
                </li>
                <li className='nav-item me-2'>
                  <Link to={'/import-visibility'}>Import Visibility</Link>
                </li>
                <li className='nav-item me-2'>
                  <Link to={'/list-virtualization'}>List Virtualization</Link>
                </li>
                <li className='nav-item me-2'>
                  <Link to={'/cache'}></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dynamic-import' element={<DynamicImport />} />
        <Route path='/import-visibility' element={<ImportOnVisibility />} />
        <Route path='/list-virtualization' element={<ListVirtualization />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/cache' element={<Cache />} />
      </Routes>
    </Router>
  );
};

export default App;
