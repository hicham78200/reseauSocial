import React from 'react';

const ReseauxSociaux = () => {
    return (
        <div className='reseaux-sociaux-container'>
            <ul>
                <li><a href="https://fr.linkedin.com" target='_blank'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                </li>
                <li><a href="https://twitter.com" target='_blank'>
                    <i class="fa-brands fa-square-twitter"></i>
                </a>
                </li>
                <li><a href="https://www.e-genieclimatique.com" target='_blank'>
                    <i class="fas fa-code"></i>
                </a>
                </li>
                <li><a href="https://youtube.com" target='_blank'>
                    <i class="fa-brands fa-youtube"></i>
                </a>
                </li>
            </ul>

        </div>
    );
};

export default ReseauxSociaux;