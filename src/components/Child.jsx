import React, { component } from "react";

const Child = ({data}) => {
  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Child;
