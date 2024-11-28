/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState } from 'react';
const LazyComponent = lazy(() => import('../components/HeavyComponents'));

const DynamicImport = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div>DynamicImport</div>
      <button onClick={() => setIsVisible(!isVisible)}>Click</button>
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
};

export default DynamicImport;
