import React, { useState } from "react";

const Parent = ({data}) => {

  return (
    <>
      <p>This is Parent</p>
      <table border='2'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Designation</td>
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

export default Parent;
