import { ItemTypes } from "../components/customer-decision-tree/CustomerDecisionTree";

export const getBorderClass = (type: ItemTypes) => {
  switch (type) {
    case ItemTypes.ORIGIN:
      return "border-yellow-500";
    case ItemTypes.BRAND:
      return "border-green-500";
    case ItemTypes.TYPE:
      return "border-blue-500";
    default:
      return "border-gray-500";
  }
};
