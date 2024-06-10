import Banner from '@/components/Banner';
import React from 'react'
import "@/app/globals.css"
import Aisection from '@/components/Aisection';
import Solutionsec from '@/components/Solutionsec';
import Aboutsec from '@/components/Aboutsec';
import Percentagesec from '@/components/Percentagesec';
import Trialsec from '@/components/Trialsec';
import Client from '@/components/Client';
import Formsec from '@/components/Formsec';
// import Banner from '@/components/Banner';
const Home = () => {
  return (
    <div>
      <Banner />
      <Aisection/>
      <Solutionsec/>
      <Aboutsec/>
      <Percentagesec/>
      <Trialsec/>
      <Client/>
      <Formsec/>
     
    </div>
  )
}

export default Home;