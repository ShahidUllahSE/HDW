import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Manayal from "../assets/Manayal.png";

const Team = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Team");
  }, [navigate]);

  // Properly return JSX
  return (
    <div>
      <h1 className="tracking-wider	font-semibold text-blue-400 my-10 mx-6 text-4xl  ">
        Meet <span className="text-pink-400">Our Team</span>
      </h1>
      <hr />
    
    
    <div className="flex justify-center flex-wrap">
      <div className="max-w-sm rounded m-4 overflow-hidden shadow-lg">
  <img className="w-full" src={Manayal} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
  </div>


    <div className="flex justify-center flex-wrap">
        <div className="max-w-sm rounded m-4 overflow-hidden shadow-lg">
          <img className="w-full" src={Manayal} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
        </div>
        </div>
      



    </div>
  

  );
};

export default Team;
