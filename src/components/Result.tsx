import React from "react";
import { Materials } from "../App";
import { RouteStep } from "../utils";

import "./Result.css";
import Item from "./Item";

interface Props {
  route: RouteStep[];
  requiredMats: Materials;
}

const Result: React.FC<Props> = ({ route, requiredMats }) => {
  return (
    <div className="results__container">
      <h2>Results</h2>
      Cost: {requiredMats.gold} Gold
      <h3>Steps</h3>
      <div className="results__route">
        <table className="results__steps">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Items/Action</th>
            </tr>
          </thead>
          <tbody>
            {route.map((step, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className="results__vendor">
                  <div>{step.vendor}</div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/npc/" +
                        step.vendor +
                        ".jpg"
                      }
                      alt="step.vendor"
                    />
                  </div>
                </td>
                <td>
                  {step.items &&
                    step.items.map(item => (
                      <div className="results__item">
                        <span className="col-3 results__quantity">
                          {item.quantity}
                        </span>
                        <div className="col-10">
                          <Item itemId={item.itemId} />
                        </div>
                      </div>
                    ))}
                  <div className="results__other">{step.other}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
