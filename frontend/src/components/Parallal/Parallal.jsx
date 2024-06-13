import React from 'react'

import ele1 from '../../assets/element1.png';
import ele2 from '../../assets/element2.png';
import ele3 from '../../assets/element3.png';
import ele4 from '../../assets/element4.png';
import ele5 from '../../assets/element7.png';
import ele6 from '../../assets/element13.png';

export default function Parallal() {
  return (
    <div id="parallax" className="parallax-levels z-0">
  <div className="level1 relative h-screen">
    <div className="h-3 flex items-center justify-center"><img src="ele1.jpg" alt="Image 1" /></div>
    <div className="h-5 absolute right-3"><img src="ele3.jpg" alt="Image 3" /></div>
  </div>
  <div className="level2 relative h-screen">
    <div className="h-2 absolute right-0"><img src="ele1.jpg" alt="Image 1" /></div>
    <div className="h-4 absolute left-0"><img src="ele2.jpg" alt="Image 2" /></div>
    <div className="h-7 absolute left-0"><img src="ele4.jpg" alt="Image 4" /></div>
    <div className="h-6 absolute left-0"><img src="ele5.jpg" alt="Image 5" /></div>
  </div>
  <div className="level3 relative h-screen">
    <div className="h-4 absolute left-0"><img src="ele6.jpg" alt="Image 6" /></div>
    <div className="h-8 absolute left-0"><img src="ele6.jpg" alt="Image 6" /></div>
    <div className="h-12 absolute right-0"><img src="ele4.jpg" alt="Image 4" /></div>
  </div>
</div>
  );
};
