import {
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Fear and greed",
    value: "73",
    footer: {
      color: "text-green-500",
      value: "Greed",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon, 
    title: "Bitcoin: NUPL",
    value: "56.35%",
    footer: {
      color: "text-green-500",
      value: "Belief/ Denial",
    },
  },

  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
