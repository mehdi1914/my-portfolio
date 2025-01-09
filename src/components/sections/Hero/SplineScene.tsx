import React from 'react';
import Spline from '@splinetool/react-spline';
import { useSplineLoader } from './hooks/useSplineLoader';
import SplineLoader from './SplineLoader';
import SplineErrorBoundary from './SplineErrorBoundary';

export default function SplineScene() {
  const { isLoading, error } = useSplineLoader();

  if (error) {
    return <SplineErrorBoundary error={error} />;
  }

  return (
    <div className="absolute inset-0 z-0">
      {isLoading && <SplineLoader />}
      <Spline 
        scene="https://build.spline.design/w1EGyKFr1qGKuu691mbo/scene.splinecontent"
        className="w-full h-full"
        onLoad={() => console.log('Scene loaded')}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
}