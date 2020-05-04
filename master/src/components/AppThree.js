import React from 'react';
//import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';

function AppThree() {
    return(
        <div className="contacts">
            <ContactCard
                contact={{name: "Mr. Haverman", 
                imgUrl: "https://photos.https://www.google.com/search?hl=en&authuser=0&tbm=isch&sxsrf=ALeKk01QPDn-y4m-KxIFQUvZVXhr3kBVpg%3A1584643178134&source=hp&biw=1920&bih=937&ei=arxzXp_zBc-ttQbC1oDoBQ&q=dogs&oq=dogs&gs_l=img.3..0l10.2634.4566..5860...0.0..0.226.457.4j0j1......0....1..gws-wiz-img.....10..35i362i39j35i39.MzXH0Q-Wcgg&ved=0ahUKEwif0Oftl6foAhXPVs0KHUIrAF0Q4dUDCAY&uact=5#imgrc=mbcmA7YdjJuEMM.com/photo/AF1QipO7n9i18C5y4bFIaoC7XsBN9easwMH8KFmVcypk",
                phone: "(618) 235-4114", 
                email: "thaverman@chicken.com"}}

            />
            <ContactCard
                contact={{name: "Mr. Taco", 
                imgUrl: "https://photos.google.com/photo/AF1QipO7n9i18C5y4bFIaoC7XsBN9easwMH8KFmVcypk",
                phone: "(618) 544-4134", 
                email: "tacoTuesday@chicken.com"}}

            />
            <ContactCard
                contact={{name: "Mr. Ebola", 
                imgUrl: "https://photos.google.com/search/_cAF1QipP4iDfQdoClteiFxxhfn0vOw5IZ6gCK~uJI_Dukes/photo/AF1QipNSuID-SYN1O2C3_wvEo7DzzRIX8YPupMdld2Xw",
                phone: "(618) 267-4104", 
                email: "Bleady@chicken.com"}}

            />
            <ContactCard
                contact={{name: "Mr. Stabby", 
                imgUrl: "https://photos.google.com/search/_cAF1QipP4iDfQdoClteiFxxhfn0vOw5IZ6gCK~uJI_Dukes/photo/AF1QipO3dF60jndubzUiOnsLHLgZ1Hsyb87fcBr4e9jJ",
                phone: "(618) 795-4323", 
                email: "PointyEnd@chicken.com"}}

            />
        </div>
    )
}export default AppThree;