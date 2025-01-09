import React from 'react';

interface SplineErrorBoundaryProps {
  error: Error;
}

export default function SplineErrorBoundary({ error }: SplineErrorBoundaryProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
      <div className="text-center space-y-4">
        <p className="text-red-400">Failed to load 3D scene</p>
        <p className="text-sm text-gray-400">{error.message}</p>
      </div>
    </div>
  );
}