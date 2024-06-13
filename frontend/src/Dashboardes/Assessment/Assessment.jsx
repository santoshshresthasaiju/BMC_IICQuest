import React, { useState } from 'react';
import data from '../Data/FetchData';
import bgImage from '../../assets/bg.png';

export default function Assessment() {
  const [selectedValues, setSelectedValues] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleCount = (id, value) => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let scores = 0;
    Object.values(selectedValues).forEach(value => {
      scores += parseInt(value, 10);
    });
    setScore(scores);

    const resultComment = scores <= 83 ? 'MILD/SUBCLINICAL' :
                          scores >= 84 && scores <= 99.8 ? 'MODERATE' :
                          'SEVERE';

    setSubmitted(true);

    const formData = {
      score: scores,
      resultComment: resultComment,
    };

    try {
      const response = await fetch('http://localhost:8000/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Response from API:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full flex flex-col justify-center items-center px-11">
        <h1 className="font-bold p-9 text-2xl text-black">
          Administer Psychological Questionnaires <br /> Track Outcomes, Inform Treatment
        </h1>
        <div className="border-teal-300 flex flex-col items-center justify-center shadow-2xl shadow-emerald-900 w-3/4 py-5">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="my-3 mx-12" key={item.id}>
                <div className="items-start">
                  {item.id}. {item.question}
                </div>
                <table className="border-collapse">
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
                        <td>Sorry, no options available</td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <div>Sorry, no data available</div>
          )}
          <button
            onClick={handleSubmit}
            className="text-white bg-teal-500 border-0 py-2 px-6 my-8 focus:outline-none hover:bg-teal-600 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </div>
      {submitted && (
        <div className="py-20 font-bold text-teal-400 bg-gray-600 px-40 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
          <h1 className="text-5xl"> {()=>setScore(score) } Score= {score.toFixed(2)}</h1>
          <p className="text-5xl">
            {score <= 6 ? 'MILD/SUBCLINICAL' :
             score >= 7 && score <= 12 ? 'MODERATE' :
             'SEVERE'}
          </p>
        </div>
      )}
    </div>
  );
}
