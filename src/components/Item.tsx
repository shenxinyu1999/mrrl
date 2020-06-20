import React from "react";
import styles from "./Item.module.scss";
import { getItem } from "../data";
import { strings } from "../data/localization";

interface Props {
  itemId: number;
  onClick?: (event: any) => void;
}

const Item: React.FC<Props> = ({ itemId, onClick }) => {
  let item = getItem(itemId);

  return (
    <div
      className={`${styles.item} ${getRarityClassName(item)}`}
      onClick={onClick}
    >
      <img className={styles.image} src={getImageUrl(itemId)} alt={item.name} />
      <span className={styles.name}>{strings.Items[item.name]}</span>
    </div>
  );
};

const getRarityClassName = item => {
  let key = "item--" + item.rarity;

  return styles[key];
};

const getImageUrl = itemId => {
  return process.env.PUBLIC_URL + "/items/" + itemId + ".jpg";
};

export default Item;
