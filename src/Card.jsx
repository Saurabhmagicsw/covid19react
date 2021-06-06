import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Card = () => {
  const [state, setstate] = useState([]);
  const loadapi = async () => {
    try {
      let req = await fetch("https://api.covid19india.org/data.json");
      let responce = await req.json();
      setstate(responce.statewise);
    } catch (error) {
      console.log("something is Wrong");
    }
  };
  useEffect(() => {
    setInterval(() => {
      loadapi();
    }, 5000);
  }, []);

  return (
    <div>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>States</th>
            <th>active</th>
            <th>confirmed</th>
            <th>deaths</th>
          </tr>
        </thead>
        <tbody>
          {state.map((val, i) => {
            return (
              <tr className="clss" key={i + 1}>
                <td>{i + 1}</td>
                <td>{val.state}</td>
                <td>{val.active}</td>
                <td>{val.confirmed}</td>
                <td>{val.deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Card;
