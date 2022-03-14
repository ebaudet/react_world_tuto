import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images prennent pour racine le dossier public */}
            <img src="./img/logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;
