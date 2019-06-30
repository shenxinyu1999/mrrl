import React from "react";
import { RouteStep } from "../utils";

import "./Result.scss";
import Item from "./Item";
import { Materials } from "../data";
import Vendor from "./Vendor/Vendor";
import { statement } from "@babel/template";
import StepItems from "./StepItems/StepItems";

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
  if (route.length === 0) {
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
              <th />
            </tr>
          </thead>
          <tbody>
            {route.map((step, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="results__vendor">
                    <Vendor
                      vendor={step.vendor}
                      includeVendorPictures={includeVendorPictures}
                    />
                    <div className="results__instruction">
                      <StepItems step={step} />
                      <div className="results__other">{step.other}</div>
                    </div>
                  </div>
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
