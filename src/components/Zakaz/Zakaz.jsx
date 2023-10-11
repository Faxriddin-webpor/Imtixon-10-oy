import React from "react";

function Zakaz() {
  try {
    return (
      <>
        <div className="container">
          <div className="card text-center">
            <h1 className="text-3xl mt-[220px] mb-[230px]">
              <strong>Ваш заказ в пути, ждите!</strong>
            </h1>
          </div>
        </div>
      </>
    );v
  } catch (error) {
    console.log(error.message);
  }
}

export default Zakaz;
