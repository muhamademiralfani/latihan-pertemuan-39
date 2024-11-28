/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyComponent = lazy(() => import('../components/HeavyComponents'));

const ImportOnVisibility = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <>
      <div>Import On Visibility</div>
      <div style={{ height: '150vh' }}></div>
      <div ref={ref}>
        {inView && (
          <Suspense>
            <LazyComponent fallback={<div>Loading...</div>} />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default ImportOnVisibility;
