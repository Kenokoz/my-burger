import React from 'react';
import Aux from '../../hoc/AuxWrapper';
import './Layout.css';


const layout = (props) => (
  <Aux>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className="Content">
      {props.children}
    </main>
  </Aux>
);

export default layout;