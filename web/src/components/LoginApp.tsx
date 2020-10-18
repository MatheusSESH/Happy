import React from 'react';

import '../styles/global.css';
import '../styles/components/login.css';
import mapMarkerImg from '../images/map-marker.svg';

export default function loginUser() {
    return (
        <div className="app-login">
            <aside>

                <div className="app-content">
                    <img src={mapMarkerImg} alt="Happy" />
                    <h1>Happy</h1>
                </div>

                <div className="location">
                    <strong>Salvador</strong>
                    <span>Bahia</span>
                </div>
            
            </aside>
        </div>
    )
}