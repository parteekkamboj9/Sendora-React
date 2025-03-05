import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import PropTypes from 'prop-types';

export default function DropDown({ title, items, onSelect }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{title}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example" onAction={onSelect}>
        {items.map((item, index) => (
          <DropdownItem key={item.value}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};