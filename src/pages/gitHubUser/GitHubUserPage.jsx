import React from 'react';
import BackButton from '../../components/BackButton';
import './Styles/GitHubUser.css';
import Section from './Components/Section';

function GitHubUserPage() {
  return (
    <>
      <section className="relative z-50">
        <div className="flex items-center bg-background h-[65px]">
          <div>
            <BackButton />
          </div>
          <div>
            <h1 className=" text-white font-semibold">GitHub User</h1>
          </div>
        </div>
      </section>
      <section className="h-screen bg-off-white">
        <Section />
      </section>
    </>
  );
}

export default GitHubUserPage;
