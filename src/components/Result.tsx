import React from "react";
import { RouteStep } from "../utils";

import "./Result.scss";
import { Materials } from "../data";
import Vendor from "./Vendor/Vendor";
import StepItems from "./StepItems/StepItems";
import { strings } from "../data/localization";

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
      <h2>{strings.Result.Results}</h2>
      {strings.Result.Cost}: {requiredMats.gold} {strings.Result.Gold}
      <h3>{strings.Result.Steps}</h3>
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
