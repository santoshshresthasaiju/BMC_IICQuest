import React,{useState} from 'react'
import data from "../Data/FetchData";
import bgImage from '../../assets/bg.png'

export default function Assessment() {
const [selectedValues, setSelectedValues] = useState({});
const [score, setScore] = useState(0)

  const handleCount = (id, value) => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      [id]: value
    }));

  };
   
  const calculateScore = () => {
    let scores = 0;
    Object.values(selectedValues).forEach(value => {
      scores += parseInt(value); 
      setScore(scores);
    });
 
  };

  console.log(score)

  return (
    <div className="bg-no-repeat bg-cover " style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="w-full flex flex-col justify-center items-center px-11" >
        <h1 className='font-bold p-9 text-2xl text-teal-500 '>Administer Psychological Questionnaires <br /> Track Outcomes, Inform Treatment</h1>
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
                <button onClick={calculateScore} className="text-white bg-teal-500 border-0 py-2 px-6 my-8 focus:outline-none hover:bg-teal-600 rounded text-lg">submit</button>

        </div>
      </div>
      </div>
  );
}
