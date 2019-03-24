import React from 'react';
import Link from 'next/link';
import Layout from '../components/DefaultLayout.js';

const Order = ['1'];
const Content = (
  <div>
    <Link href="/about">
      <button type="button">Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

const Index = () => (
  <Layout order={Order} content={Content} />
);

export default Index;
