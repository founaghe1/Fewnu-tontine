import React from 'react';
import './layout.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) =>  {
  return (
    <div className="containers">
      <div className='myApp shadow'>
        <Header />
        <main className='my-5 py-5 mains'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
