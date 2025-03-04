import React from 'react';

import "../../styles/footer.scss"

function Footer(props) {
    return (
        <footer>
            <div className='nom'>Mickael Vivens © 2025</div>
            <div className="reseaux">
                <div className="linkedin"><a href="https://www.linkedin.com/in/mickael-vivens-83b98691/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                <div className="github"><a href="https://github.com/Kordasauter" target="_blank" rel="noopener noreferrer">Github</a></div>
            </div>
        </footer>
    );
}

export default Footer;