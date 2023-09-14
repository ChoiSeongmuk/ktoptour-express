import React, { useState } from "react";
import localData from "../../selection.json";
function Home() {
  const [days, setDays] = useState(0);
  const [people, setPeople] = useState(0);

  const data = localData;

  const calculateSum = (fare) => {
    return fare * days * people;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mt-8 mb-16">
        Estimate Of Travel Expenses
      </h1>
      <div className="mb-4">
        <label className="mr-2 font-bold">Travel Period (days): </label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(+e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="mr-2 font-bold">Number Of People: </label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(+e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <table className="w-full border">
        <thead>
          <tr className={"text-xl"}>
            <th colSpan={2} className="border p-2">
              SELECTION LIST
            </th>
            <th className="border p-2">FARE</th>
            <th className="border p-2 w-4">CHECK</th>
            <th className="border p-2">SUM</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([category, items], categoryIndex) =>
            Object.entries(items).map(([item, fare], itemIndex) => (
              <tr className={"border"} key={item}>
                {itemIndex === 0 && (
                  <td
                    className="border-x p-2 font-bold text-center w-1/6"
                    rowSpan={Object.entries(items).length}
                  >
                    {category}
                  </td>
                )}
                <td className="border-x p-2">{item}</td>
                <td className="border-x text-right p-2">{fare}</td>
                <td className="border-x py-3 flex items-center justify-center">
                  <input type="checkbox" />
                </td>
                <td className="border-x p-2 text-right">
                  {calculateSum(fare)}
                </td>
              </tr>
            )),
          )}
          <tr className={"border"}>
            <td
              colSpan={4}
              className={"border-x font-bold text-2xl text-center"}
            >
              Total Price
            </td>
            <td className={"text-right"}>0원</td>
          </tr>
          <tr className={"border"}>
            <td
              colSpan={4}
              className={"border-x font-bold text-2xl text-center"}
            >
              Price Per Person
            </td>
            <td className={"text-right"}>0원</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
