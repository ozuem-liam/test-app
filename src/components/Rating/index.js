import React from 'react';
 
 
function Rating() {
        return (
                <ul className="rating"> 
                    <li className="rating-item" data-rate="1" ></li>
                    <li className="rating-item" data-rate="2" ></li>
                    <li className="rating-item" data-rate="3" ></li>
                    <li className="rating-item active" data-rate="4" ></li>
                    <li className="rating-item" data-rate="5" ></li>
                </ul>
        );
}


export default Rating;