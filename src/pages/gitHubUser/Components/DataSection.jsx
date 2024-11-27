import React, { useEffect, useState } from 'react';
import Statistics from './Statistics';
import Information from './Information';

const DataSection = ({ searchedUser }) => {
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
      <div className="flex flex-col gap-[33px] md:gap-6 xl:gap-0 w-full xl:min-w-[730px] h-[517px] xl:min-h-[419px] px-[1.5rem] pt-[2rem] pb-[3rem] md:p-[2.5rem] xl:p-0 mt-6 font-github-user rounded-[15px] bg-white dark:bg-dark-blue drop-shadow-[0_5px_9px_rgba(75,106,155,0.1)] dark:drop-shadow-none">
        <div className="name-and-avatar flex gap-[19px] md:gap-[41px] xl:px-[3rem] xl:pt-[3rem]">
          <img
            src={`${data.avatar_url}`}
            alt="img"
            className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
          />
          <div className="name-tag-joined w-full flex flex-col xl:flex-row xl:justify-between h-[69px]">
            <div className="name-tag">
              <p className="font-bold text-black text-[16px] md:text-[26px] dark:text-white">
                {data.name || 'No name'}
              </p>
              <p className="font-light text-light-blue text-[13px] md:text-[16px]">
                {`@${data.login}`}
              </p>
            </div>
            <div className="joined text-light-grey dark:text-white text-[13px] md:text-[15px] xl:self-start xl:mt-2">
              {`Joined ${new Date(data.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`}
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-col gap-6 xl:gap-0 md:gap-8 xl:pl-[12.625rem] xl:pr-[3rem] xl:-mt-6">
          <p className="w-full text-[13px] xl:text-[15px] leading-[25px] text-navy-blue dark:text-white">
            {data.bio || 'This profile has no bio'}
          </p>
          <div className="w-full h-[85px] flex justify-between px-[14.5px] py-[18.5px] md:pl-[2rem] md:pr-[6rem] xl:mt-[2rem] bg-off-white dark:bg-dark-mode-black rounded-[10px]">
            <Statistics subject="Repos" count={data.public_repos} />
            <Statistics subject="Followers" count={data.followers} />
            <Statistics subject="Following" count={data.following} />
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-y-[19px] xl:mt-[4.313rem] items-start justify-between gap-4">
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-location.svg"
              data={data.location || 'Not Available'}
              row_start="1"
              col_start="1"
            />
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-website.svg"
              data={data.blog || 'Not Available'}
              row_start="2"
              col_start="2"
            />
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-twitter.svg"
              data={data.twitter_username || 'Not Available'}
              row_start="1"
              col_start="2"
            />
            <Information
              iconId="src/pages/gitHubUser/Assets/icon-company.svg"
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
