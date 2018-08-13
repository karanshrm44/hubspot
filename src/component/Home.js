import React from 'react';
import Footer from  './Footer/Footer';
import HeaderBelow from './HeaderBelow/HeaderBelow';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';


const Home = () => {

    return(
        <div>
           <HeaderBelow />
           <Section2 />
           <Section3 />
           <Section4 />
           <Section5 />
           <Section6 />
           <Section7 />
           <Footer />
        </div>
    )
}

export default Home;