import React from "react";
import donate2 from "./assets/donate2.png";
const Help = () => {
  return (
    <div>
      <div className=" flex-h-screen flex items-center justify-center">
        <img src={donate2} className="w-full h-80" alt="donate" />
      </div>

      <div className="slider mt-4 flex-col-reverse md:flex-row bg-[#f2f2f2] mx-24">
        <div className="left flex flex-col  items-center md:items-baseline py-4  space-y-5">
          <p className=" mr-6 font-semibold mx-5">
            Only the kindness and unity of people and businesses allow us to
            create these loving and concrete works. We recognize that every
            contribution, no matter how big or small, comes directly from the
            heart and are grateful for it.
          </p>
        </div>

        <div className="m-4">
          <p className=" ">
            Your generosity will support a range of programs to empower and
            assist divorced women in rebuilding their lives and living life to
            the fullest.
          </p>
        </div>
      </div>

      <div className="slider mt-4 flex-col-reverse md:flex-row mx-24 mb-60 bg-[#f2f2f2]">
      <div className="left flex flex-col items-center md:items-baseline py-4   space-y-5">
  <p className="font-semibold ml-96">You can donate on
  <br/>
  <div className="ml-5">

 Faisal Bank
  </div>
  
  
  </p>
</div>


        <div className="-ml-6">
          <p className="font-bold text-xl ml-96  ">3201383000003526</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
