import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import manayal from "../assets/manayal.png";
import uzair from "../assets/uzair.png"
import eman from "../assets/eman.png"
import moeez from "../assets/moeez.png"
import wadana from "../assets/wadana.png"
import mahnoor from "../assets/mahnoor.png"
import faisal from "../assets/faisal.png"
import marwa from "../assets/marwa.png"
import ayesha from "../assets/ayesha.png"
import umair from "../assets/umair.png"
import umar from '../assets/umar.png'
import afaq from "../assets/afaq.png"
import iqra from "../assets/iqra.png"
import laiba from "../assets/laiba.png"
import manahil from "../assets/manahil.png"
import muneeb from "../assets/muneeb.png"
import suliman from '../assets/suliman.png'


const Team = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    navigate("/Team");
  }, [navigate]);

  
  return (

    
    <div>
      {/* <div className=""> */}
      <h1 className=" flex justify-center flex-wrap tracking-wider	font-semibold text-blue-400 my-10  text-4xl  ">
        Meet <span className="text-pink-400 mx-3">Our Team</span>
      </h1>
      <hr />
      {/* </div> */}


    <div>
      <div>
        <h1 className=" p-3 my-5 mx-auto w-36 rounded tracking-wide font-serif text-2xl text-white bg-pink-400">Executives</h1>
      </div>

      <div className="flex justify-center flex-wrap">
  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={faisal} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl text-blue-600 font-serif mb-1">Faisal Mushtaq Yousafzai</div>
    <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Monitoring Officer & Legal Advisor</div>
  
      <p className="text-gray-700 text-base">
      Greetings Everyone, we to lay the foundation for a more efficient and mentally sound society, A society where everyone is equally respected and responsible, I wish that each and everyone of you understand this fact and aim to work for the betterment of this community…A warm welcome to you all. 
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={uzair} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Uzair Khan</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Executive Officer</div>

      <p className="text-gray-700 text-base ">
      Morrow Everyone ! This organisation is not only for the benefit of  women but also for the mental growth of our youth. We aims for the advancement and growth of our society, we are trying to establish a more generous and mature society, and I expect that every single one of your’s aim is aligned with ours. 
Warm regards

      </p>
      {/* <button id="toggle-btn" class="mt-4 text-blue-500 focus:outline-none">Read More</button>
    <button id="hide-btn" class="hidden mt-4 text-blue-500 focus:outline-none">Hide</button> */}

    
    </div>
  </div>
 </div>

 <div>
  <hr />
 </div>

  
 <div>
        <h1 className=" p-3 my-5 mx-auto w-40 rounded tracking-wide font-serif text-2xl text-white bg-pink-400">Core Team</h1>
      </div>

  <div className="flex justify-center flex-wrap">
  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={eman} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Eman Faisal Shah</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Administration Officer</div>

      <p className="text-gray-700 text-base">
      Hello everyone, Women in our country face a rather biased and harsh upbringing, Empower Her Organisation hopes to eliminate this factor from our society and to work for the social welfare of women, I welcome you all. 
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={wadana} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-blue-600 font-serif text-xl mb-1">Wadana Qazi</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Documentation Specialist</div>
      <p className="text-gray-700 text-base">
      Greetings to all, Empower Her is focused on the betterment of women and plans to address the issues faced by judicially separated women and we hope to make life easier for them, I hope that each and everyone of you will not shy away from the curveballs this organisation throws at you.
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={mahnoor} alt="Sunset in the mountains" />
    <div className="px-6 py-4 ">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Mahnoor Iqbal</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Documentation Specialist</div>
      <p className="text-gray-700 text-base">
      I greet you all, this organisation follows quite a virtuous path. It  plans on tapping into the minds of youth and feeding them knowledge necessary for mental and social growth. 
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={ayesha} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Ayesha Yousaf</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Documentation Specialist</div>
      <p className="text-gray-700 text-base">
      Greetings Everyone! Empower Her Organisation is working for a very noble cause and aims to establish a more fruitful and sustainable future for women, I hope that every single one of you will work with zeal and zest, looking forward to working with all of you.
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={manayal} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Manayal Ahmed</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Photographer</div>
      <p className="text-gray-700 text-base">
      Hello! I am the photographer of the EmpowerHer Organisation and I am here to make sure that no moment goes unnoticed and every interaction between the people working is captured by my lens,I welcome you all..Regards
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={marwa} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Marwa Stuman</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Photographer</div>

      <p className="text-gray-700 text-base">
      Greetings, I hope to capture this exhibition of philanthropy with my camera to set an example for other people and I hope that every single of you will give me excellent moments to capture, I welcome you all with a warm heart and open arms. 
      </p>
    </div>
  </div>
 </div>

<div>
  <hr />
</div>

<div>
        <h1 className=" p-3 my-5 mx-auto w-40 rounded tracking-wide font-serif text-2xl text-white bg-pink-400">Volunteers</h1>
      </div>
  <div className="flex justify-center flex-wrap">
  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={moeez} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Moeez Khan</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteers Lead</div>

      <p className="text-gray-700 text-base">
      I am Moeez Khan the lead volunteer. EmpowerHer Organisation is  all about supporting and uplifting women in every aspect of their lives. If you ever need any help or resources, feel free to reach out. Keep shining! 
      </p>
    </div>
  </div>
  </div>

  <div className="flex justify-center flex-wrap">
<div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={laiba} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Laiba Durrani</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Hello! I wanted to extend a warm welcome to all the incredible women out there. We're here to empower, support, and uplift each other on this amazing journey. Together, we can break barriers, shatter glass ceilings, and create a world where every woman can thrive. Welcome to our community! 
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={umar} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">M.Umar Zeb Ghaznavi</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Hello Everyone, My name is M.Umar Zeb Ghaznavi, and I am a volunteer of EmpowerHer Organisation, Step into a world where women's voices are heard, dreams are realized, and barriers are shattered. Welcome to our organisation, where we stand together in solidarity and strive for gender equality.
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={manahil} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Manahil Irfan</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Greetings, I am thrilled to be a part Empower Her Organization.I’ve found a group of people that share my values and ideas of making this world a better and safer place for women. I am appreciative of the chance to join this empowering path for women. Join us as we together reach new heights and break the barriers.
      </p>
    </div>
  </div>


  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={umair} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Muhammad Umair</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Welcome to all of you from my side, I am Muhammad Umair the graphic designer of this organisation, I look forward to helping this organisation reach new heights through social media alongside you all.
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={afaq} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Afaq Ahmed</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Hello everyone! I am a volunteer of Empower Her Organisation and I would love to make this project better by covering the shortcomings with you all.
      </p>
    </div>
  </div>


  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={suliman} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Suleiman Bangash</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Good Morrow to everyone, I am Suleiman Bangash…I joined this organisation due to the philanthropic aspect and the noble cause they were following, I am a volunteer of Empower Her Organisation. 
      </p>
    </div>
  </div>

  

 


  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={iqra} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Iqra Wisal</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Hello! I’m Iqra Wisal, I am the Volunteer of EmpowerHer organisation,. Thrilled about the prospect of working collaboratively and making a positive impact together. Looking forward to our shared journey!
      </p>
    </div>
  </div>

  <div className="max-w-xs rounded border-2 border-pink-400 m-4 overflow-hidden shadow-lg">
    <img className="w-full" src={muneeb} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-blue-600 font-serif mb-1">Syed Muneeb</div>
      <div className="font-bold font-serif text-sm w-auto p-1 bg-slate-200 mb-2 ">Volunteer</div>

      <p className="text-gray-700 text-base">
      Greeting everyone, I am Syed Muneeb the video editor of Empower Her Organisation, I look forward to portraying this noble cause through clips and beautiful crafted video edits, I welcome you all to be a part of this journey alongside us.
      </p>
    </div>
  </div>
</div>
</div>
</div>

  );
};

export default Team;
