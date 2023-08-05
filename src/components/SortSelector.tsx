import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const sortOrders = [
  {
    value: "",
    label: "Relevace",
  },
  {
    value: "-added",
    label: "Date added",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "-released",
    label: "Release date",
  },
  {
    value: "-metacritic",
    label: "Metacritic",
  },
  {
    value: "-rating",
    label: "Average rating",
  },
];

const currentSortOrder = (sortOrder: string) => {
  return sortOrders.find((order) => order.value === sortOrder);
};
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder(sortOrder)?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
