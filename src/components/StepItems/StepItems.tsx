import React from "react";

import style from "./StepItems.module.scss";
import { RouteStep } from "../../utils";
import Item from "../Item";

interface Props {
  step: RouteStep;
}

const StepItems: React.FC<Props> = ({ step }) => {
  if (step.items == null || step.items.length === 0) {
    return null;
  }

  return (
    <table>
      <tbody>
        {step.items.map(item => (
          <tr>
            <td className={style.quantity}>{item.quantity}</td>
            <td className={style.item}>
              <Item itemId={item.itemId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StepItems;
