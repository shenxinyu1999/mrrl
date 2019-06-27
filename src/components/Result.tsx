import React from "react";
import { RouteStep } from "../utils";

import "./Result.scss";
import Item from "./Item";
import { Materials } from "../data";

interface Props {
  route: RouteStep[];
  requiredMats: Materials;
  includeVendorPictures: boolean;
}

const Result: React.FC<Props> = ({
  route,
  requiredMats,
  includeVendorPictures
}) => {
  if (route.length == 0) {
    return null;
  }

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
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="results__vendor">
                  <div>{step.vendor.name}</div>
                  {includeVendorPictures && (
                    <div>
                      <a href={step.vendor.url}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/npc/" +
                            step.vendor.name +
                            ".jpg"
                          }
                          alt={step.vendor.name}
                        />
                      </a>
                    </div>
                  )}
                  <div>{step.vendor.instruction}</div>
                </td>
                <td>
                  {step.items &&
                    step.items.map((item, index) => (
                      <div key={index} className="results__item">
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
