import React from 'react';

import './Social.css';

const Social = () =>{
    return(
        <div className="Social__Line">
            <div className="Social">
            <a href="https://twitter.com/lucignation_olu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/Lucignation" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/geraldolumide/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://dribbble.com/lucignation" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
            </div>
        </div>
    );
}

export default Social;