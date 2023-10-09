import React, { useContext } from 'react'
import { rankingContext } from '../contexts/rankingcontext';
import Modalranking from './Modalranking';

const Ranking = () => {
    
    const {ranking , isLoading} = useContext(rankingContext);
    
    console.log("this i s" , ranking[0]);
    if(isLoading){
      return <p>Loading Ranking Data</p>
    }
    else{
      return <Modalranking ranking={ranking}/>
    }
}

export default Ranking