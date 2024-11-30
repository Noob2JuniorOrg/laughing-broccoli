import React, { useEffect, useState } from 'react';
import Statistics from './Statistics';
import Information from './Information';

const DataSection = ({ searchedUser, setIsResult }) => {
  const [isLoading, setIsLoading] = useState('false');
  const [data, setData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${searchedUser}`
        );
        if (!response.ok) {
          setIsResult(false);
          return;
        }
        const receivedData = await response.json();

        setData(receivedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchedUser) fetchData();
  }, [searchedUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Please try again!</div>;
  }

  return (
    <>
      <div className="data-section-layout">
        <div className="avatar-and-name">
          <img src={`${data.avatar_url}`} alt="img" className="user-avatar" />
          <div className="name-tag-joined">
            <div>
              <p className="full-name">{data.name || 'No name'}</p>
              <p className="user-tag">{`@${data.login}`}</p>
            </div>
            <div className="join-date">
              {`Joined ${new Date(data.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`}
            </div>
          </div>
        </div>

        <div className="user-details">
          <div className="user-bio">{'This profile has no bio'}</div>
          <div className="user-statistics">
            <Statistics subject="Repos" count={data.public_repos} />
            <Statistics subject="Followers" count={data.followers} />
            <Statistics subject="Following" count={data.following} />
          </div>

          <div className="user-information">
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-location.svg"
              darkIcon="src/pages/gitHubUser/Assets/dark-location.svg"
              data={data.location || 'Not Available'}
              row_start="1"
              col_start="1"
            />
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-website.svg"
              darkIcon="src/pages/gitHubUser/Assets/dark-website.svg"
              data={data.blog || 'Not Available'}
              row_start="2"
              col_start="2"
            />
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-twitter.svg"
              darkIcon="src/pages/gitHubUser/Assets/dark-twitter.svg"
              data={data.twitter_username || 'Not Available'}
              row_start="1"
              col_start="2"
            />
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-company.svg"
              darkIcon="src/pages/gitHubUser/Assets/dark-company.svg"
              data={data.company || 'Not Available'}
              row_start="1"
              col_start="2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSection;
