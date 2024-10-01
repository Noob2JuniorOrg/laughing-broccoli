import React from 'react';
import BackButton from '../../components/BackButton';

function GitHubUserPage() {
  return (
    <div className="flex items-center">
      <div>
        <BackButton />
      </div>
      <div>
        <h1 className=" text-white font-semibold">GitHub User</h1>
      </div>
    </div>
  );
}

export default GitHubUserPage;
