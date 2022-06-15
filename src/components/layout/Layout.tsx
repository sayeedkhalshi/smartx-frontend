import * as React from 'react';

import WebMenu from '@/components/menu/WebMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <WebMenu />

      {children}
    </>
  );
}
