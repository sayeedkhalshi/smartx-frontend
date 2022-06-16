import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const CreateItem = () => {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className='text-3xl font-bold'>Create Item</h1>
        </div>
      </section>
    </Layout>
  );
};

export default CreateItem;
