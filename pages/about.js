import React from 'react';
import Layout from '../components/DefaultLayout.js';

const Order = ['2'];
const Content = (
  <div>
    <p>This is the about page</p>
  </div>
);
export default () => (
  <Layout order={Order} content={Content} />
);
