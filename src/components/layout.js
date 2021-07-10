import * as React from 'react';
import NavBar from './navbar';
import { 
  container,
  heading
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <NavBar></NavBar>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout