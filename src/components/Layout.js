import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    //Con este tag evitamos repetir muchos div's que no sirven para nada. Código más limpio.
    <React.Fragment> 
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
