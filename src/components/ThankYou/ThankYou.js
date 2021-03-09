import React from 'react';
import thankYou from '../../images/thank-you.gif';

const ThankYou = () => {
    return (
         <div align="center" className="col-md-4">
            {
                <img src={thankYou} alt="" />
            }
        </div> 
    );
};

export default ThankYou;