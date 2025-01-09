import React from 'react';

export default function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="w-32 h-32 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin" />
    </div>
  );
}