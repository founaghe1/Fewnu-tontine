import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) =>  {
  return (
    <div>
      <Header />
      <main className='mt-5 pt-5'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
