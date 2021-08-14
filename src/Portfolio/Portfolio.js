import React from 'react';
import './Portfolio.css';
import work from './work.jpg'


function Portfolio () {
    return (
    <div>
        <h1>Portfolio</h1>
        <div class="image-box">
            <img src="./office.jpg" style={{width: '40%' }} class="hover image" alt="laptop on desk with open window view" />
            <a href="https://github.com/JacobBeckfeld/Cocktails-Cuisine-Craft-Beers">
                <img src={work} style={{width: '40%' }} class="office overlay" alt="laptop on desk with open window view" />
            </a>
        </div>
        <div class="image-box">
            <img src="./work.jpg" style={{width: '40%' }} class="hover image" alt="laptop on desk with open window view" />
            <a href="https://github.com/JacobBeckfeld/Group-Project_Two">
                <img src="./area.jpg" style={{width: '40%' }} class="office overlay" alt="laptop on desk with open window view" />
            </a>
        </div>   
    </div>
    )
}

export default Portfolio