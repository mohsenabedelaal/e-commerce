import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />
        {/* Product id,title , price, rating, image */}
        <div className="home__row">
        <Product
            id="12345"
            title="My place to go for good burgers and amazing fries!!
            The place is calm and was empty on a Friday night.
            Ordered one chicken mozarella burger and one classic chicken burger!
            Fries were crunchy and yummy with their perfect seasoning.
            However , the chicken was burnt and dry.
            We ate them so it was fine !
            But I would want this to never happen !"
            price={12.2}
            rating={5}
            image ="https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg"
            />
        <Product
            id="12345"
            title="My place to go for good burgers and amazing fries!!
            The place is calm and was empty on a Friday night.
            Ordered one chicken mozarella burger and one classic chicken burger!
            Fries were crunchy and yummy with their perfect seasoning.
            However , the chicken was burnt and dry.
            We ate them so it was fine !
            But I would want this to never happen !"
            price={12.2}
            rating={5}
            image ="https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg"
            />
        </div>
        <div className="home__row">
        <Product
            id="12345"
            title="My place to go for good burgers and amazing fries!!
            The place is calm and was empty on a Friday night.
            Ordered one chicken mozarella burger and one classic chicken burger!
            Fries were crunchy and yummy with their perfect seasoning.
            However , the chicken was burnt and dry.
            We ate them so it was fine !
            But I would want this to never happen !"
            price={12.2}
            rating={5}
            image ="https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg"
            />
        <Product
            id="12345"
            title="My place to go for good burgers and amazing fries!!
            The place is calm and was empty on a Friday night.
            Ordered one chicken mozarella burger and one classic chicken burger!
            Fries were crunchy and yummy with their perfect seasoning.
            However , the chicken was burnt and dry.
            We ate them so it was fine !
            But I would want this to never happen !"
            price={12.2}
            rating={5}
            image ="https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg"
            />
        <Product
            id="12345"
            title="My place to go for good burgers and amazing fries!!
            The place is calm and was empty on a Friday night.
            Ordered one chicken mozarella burger and one classic chicken burger!
            Fries were crunchy and yummy with their perfect seasoning.
            However , the chicken was burnt and dry.
            We ate them so it was fine !
            But I would want this to never happen !"
            price={12.2}
            rating={5}
            image ="https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg"
            />

        </div>

        {/* product */}
        </div>
    )
}

export default Home
