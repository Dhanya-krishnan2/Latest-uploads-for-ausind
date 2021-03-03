import React from 'react';
//import img1 from '';
// here I am using bootstrap to get the beautiful reusable card
// Here I want that card to visible grid view

const Card = prop => {

    return(
        <div className="card text-center">
        <div className="overflow">
        <img src="" alt="solar-images" className='card-img-top'/>
        </div>
        <div className="card-body text-dark">
         <h4 className='card-title'>title</h4>
         <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum eos neque consectetur laudantium sapiente ab provident magni! Accusamus impedit itaque quibusdam non suscipit consequuntur placeat excepturi consectetur nulla harum.
         </p>
        </div>

        </div>
    );

}
export default Card;