import React from "react";
import donate2 from "./assets/donate2.png";
import quote1 from './assets/Quote1.png'
const Help = () => {
  return (
    <div className=" bg-[#e4e5f1]">
      <div className=" flex-h-screen flex items-center justify-center">
        <img src={donate2} className="w-full h-80" alt="donate" />
      </div>

      <div className="slider mt-4 bg-[#ffffff] px-4 md:px-24 py-8 md:mx-4 border border-gray-300">
  <div className="text-center md:text-left font-serif mx-auto md:mx-0">
    <p className="font-semibold mb-4">Join our community of strong and bold women!</p>
    <p>
    Help us make a change, Help us foster a society where women can live their life to the full extent, Help us in lifting up oppressed women. Help us in our mission to support women, Help us to nurture independent women of society,Help them to educate, help them to build themselves.As an empowered and independent woman leads to an empowered society
      <br/><br/>
      A little contribution from your front can make a big impact on someone's life, and we promise you that your contributions will reach to the people in need.<br/>
For God forbid it could be  someone from your family in the future, Help us make a change in finishing this wave of oppression from our society once and for all.
      <br/><br/>
      Your generous donation can help us provide essential resources, mentorship programs, and educational opportunities to women in need. With your contribution, we can break down barriers, foster leadership skills, and promote gender equality. 
      <br/><br/>
      Every penny counts and makes a difference in the lives of these women. Your support not only empowers them but also helps create a more inclusive and equitable society for all.
      <br/><br/>
      If you're interested in making a donation or learning more about our organization, please don't hesitate to reach out. Together, let's uplift, inspire, and empower women to reach their full potential.
      <br/><br/>
    </p>
    <p className="font-serif mt-4">
      Thank you for considering our cause. Your support means the world to us.
    </p>
  </div>
</div>


      <div className=" flex flex-col items-center justify-center mt-2 ">
          <img className="h-96 w-auto  justify-center items-center" src={quote1} alt=""/>

          </div>


          
          
          <div className="flex flex-col items-center justify-center">
          <h1 className="p-3 mt-5 mx-auto w-auto rounded tracking-wide font-serif text-2xl text-white bg-pink-400">
    You Can Donate Us
  </h1>
  <div className="flex justify-center flex-wrap">
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-pink-400">Bank Transfer</div>
        <p className="text-gray-700 text-base">
          Make your donations directly into our bank account. Please use your full name as the reference.
        </p>
        <p className="text-gray-700 text-base mt-2">
          Account Name: <span className="font-bold">Uzair Khan</span>
        </p>
        <p className="text-gray-700 text-base">
          Account Number: <span className="font-bold">3201383000003526</span>
        </p>
        <p className="text-gray-700 text-base">
          Bank: <span className="font-bold">Faisal Bank</span>
        </p>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden bg-white shadow-lg m-4">
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-pink-400">Easypaisa Transfer</div>
        <p className="text-gray-700 text-base">
          Conveniently donate through Easypaisa using the details below.
        </p>
        <p className="text-gray-700 text-base mt-2">
          Mobile Number: <span className="font-bold">+92 318 9570304</span>
        </p>
        <p className="text-gray-700 text-base">
          Account Title: <span className="font-bold">Uzair Khan</span>
        </p>
      </div>
    </div>
  </div>
  
  
  </div>

</div>
  );
};

export default Help;
