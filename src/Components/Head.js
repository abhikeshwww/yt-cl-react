import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <MenuRoundedIcon className="h-8" />
        <img
          className="h-8 mx-2"
          alt="yt-logo"
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-grey-400 p-2 rounded-l-full"
        ></input>
        <button className="border border-grey-400 p-2 rounded-r-full">
          Search
        </button>
      </div>

      <div>
        <PersonOutlineRoundedIcon className="h-8" />
      </div>
    </div>
  );
};

export default Head;
