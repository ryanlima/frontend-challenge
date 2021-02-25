import React from "react";
import "./style.css";

const ItemPeriod = ({ period, periodDescription }) => {
  return (
    <div className="col-6 mb-3">
      <div className="card item-period ">
        <button className="btn" onClick={() => alert(period)}>
          <div className="card-body text-center p-3 ">
            <p className="my-auto">
              {" "}
              {period && `${period} ${periodDescription}`}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemPeriod;
