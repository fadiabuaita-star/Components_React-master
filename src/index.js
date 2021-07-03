import ReactDom from 'react-dom';
import React from 'react';
import { EditUser } from './components/ui/EditUser';
import { List } from './components/ui/List';

//ReactDom.render(<EditUser />,document.getElementById('root'));
ReactDom.render(<List items={['Ido','Maria','Jud']}/>,document.getElementById('root'));