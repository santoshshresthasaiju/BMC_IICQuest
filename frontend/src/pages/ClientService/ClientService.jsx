import React, { useState } from "react";
import data from "../../Data/FetchData";
import bgImage from '../../assets/bg.png';
import ClientTop from "../../components/ClientServiceTop/ClientTop";
import ClientButton from "../../components/ClientServiceTop/ClientButton";

// import Parallal from "../../components/Parallal/Parallal";

export default function ClientService() {
  
  const [selectedValues, setSelectedValues] = useState({});

  const handleCount = (id, value) => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      [id]: value
    }));

  };
   
  const calculateScore = () => {
    let score = 0;
    selectedValues.forEach(value => {
      score += parseInt(value); 
    });
    return score;
  };


  return (
    <div className="bg-no-repeat bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
        <ClientTop />
      <div className="w-full flex justify-center items-center px-11" >
        <div className=" border-teal-300 flex flex-col items-center justify-center shadow-2xl shadow-emerald-900 w-3/4 py-5">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="my-3 mx-12"
              key={item.id}
            >
                <div className="items-start">
                {item.id}. {item.question}
                </div>
                
                <table className=" border-collapse ">
                  <tbody>
                    <tr className="">
                      {item.options && item.options.length ? (
                        item.options.map((it) => (
                          <td
                            key={it.value}
                            onClick={() => handleCount(item.id, it.value)}
                            className={`border-2 border-teal-500 px-10 py-3 text-center cursor-pointer ${
                              selectedValues[item.id] === it.value ? 'bg-teal-600 text-white' : 'bg-teal-200'
                            }`}
                          >
                            {it.label}
                          </td>
                        ))
                      ) : (
                        <td>sorry</td>
                      )}
                    </tr>
                  </tbody>
                </table>
              
            </div>
          ))
        ) : (
          <div>Sorry</div>
        )}
        </div>
      </div>
      <ClientButton />
    </div>
  );
}
