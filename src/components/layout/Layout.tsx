import * as React from 'react';

import Footer from '@/components/footer';
import WebMenu from '@/components/menu/WebMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <main>
      <WebMenu />

      {children}

      <Footer />
    </main>
  );
}
