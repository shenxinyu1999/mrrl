import React from "react";
import { Vendor } from "../../data/vendor";
import { strings } from "../../data/localization";

import style from "./Vendor.module.scss";

interface Props {
  vendor: Vendor;
  includeVendorPictures: boolean;
}

const VendorCmp: React.FC<Props> = ({ vendor, includeVendorPictures }) => {
  return (
    <div className={style.container}>
      <div className={style.name}>{strings.Vendor[vendor.name]}</div>
      {includeVendorPictures && (
        <div>
          <a href={strings.Vendor[vendor.url]}>
            <img
              src={
                process.env.PUBLIC_URL + "/images/npc/" + vendor.name + ".jpg"
              }
              alt={vendor.name}
            />
          </a>
        </div>
      )}
      <div>{strings.Vendor[vendor.instruction]}</div>
    </div>
  );
};

export default VendorCmp;
