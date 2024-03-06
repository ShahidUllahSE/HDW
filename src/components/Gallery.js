import React from "react";
import g1 from './assets/g1.png'
import g2 from './assets/g2.png'
import g3 from './assets/g3.png'
import g4 from './assets/g4.png'
import gallery5 from './assets/gallery5.jpg'
import gallery6 from './assets/gallery6.jpg'


const Gallery = () => {
  return <div>
    

<div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
    {/* <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button> */}
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-96 w-full rounded-lg" src={g1} alt=""/>
    </div>
    <div>
        <img class="h-96 w-full rounded-lg" src={g2} alt=""/>
    </div>
    <div>
        <img class="h-96 w-full rounded-lg" src={g3} alt=""/>
    </div>
    <div>
        <img class="h-96 w-full rounded-lg" src={g4} alt=""/>
    </div>
    <div>
        <img class="h-96 w-full rounded-lg" src={gallery5} alt=""/>
    </div>
    <div>
        <img class="h-96 w-full rounded-lg" src={gallery6} alt=""/>
    </div>
    {/* <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div> */}
    {/* <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div> */}
    {/* <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div> */}
    {/* <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div> */}
    {/* <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div> */}
    {/* <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div> */}
    
</div>

  </div>;
};

export default Gallery;
