import React from 'react';
import BackButton from '../components/BackButton';

function NotFoundPage() {
  return (
    <div>
      <BackButton />
      <div className="text-white text-2xl mt-6">404 Not Found</div>
    </div>
  );
}

export default NotFoundPage;
