import React from 'react';

import './Tour.css';

const Tour = () =>{
    return(
        <div className="Tour">
            <h1>UPCOMING DATES</h1>
            <hr />
            <table>
                    <tr>
                        <th>Date & Time</th>
                        <th>Venue & Location</th>
                        <th>Buy Ticket</th> 
                    </tr>
                    <tr>
                        <td>??/??/2020</td>
                        <td>Leon</td>
                        <td><a href="#comingSoon">Coming Soon</a></td>
                    </tr>
                    <tr>
                        <td>??/??/2020</td>
                        <td>Paris</td>
                        <td><a href="#comingSoon">Coming Soon</a></td>
                    </tr>
                    <tr>
                        <td>??/??/2020</td>
                        <td>England</td>
                        <td><a href="#comingSoon">Coming Soon</a></td>
                    </tr>
                    <tr>
                        <td>??/??/2020</td>
                        <td>Belgium</td>
                        <td><a href="#comingSoon">Coming Soon</a></td>
                    </tr>
                    <tr>
                        <td>??/??/2020</td>
                        <td>Ireland</td>
                        <td><a href="#comingSoon">Coming Soon</a></td>
                    </tr>
                    <tr>
                        <td>??/??/2020</td>
                        <td>Scotland</td>
                        <td><a href="#comingSoon">Coming Soon</a></td>
                    </tr>
            </table>
        </div>
    );
}

export default Tour;