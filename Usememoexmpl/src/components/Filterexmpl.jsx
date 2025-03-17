import {usestate, useMemo, useState} from 'react';

const Filterexmpl = () => {
    const [numbers]=useState([1,2,3,4,5,6,7,8,9,10]);
    const[filterEven, setFilterEven]= useState(true);

    const filteredNumbers=useMemo(()=>
    {
         console.log("Filtering numbers");
          return numbers.filter(number=>(filterEven ? number %2===0: number %2 !==0));

    }, [numbers, filterEven]);
  return (
    <div>
      <h1>Numbers: {filteredNumbers.join(",")}</h1>
      <button onClick={()=>setFilterEven(!filterEven)}>
        Toggle Filter: {filterEven ? "Even" :"Odd"}
      </button>
    </div>
  );
};

export default Filterexmpl;
