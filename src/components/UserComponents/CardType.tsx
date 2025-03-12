import CustomDropdown from '../CustomDropdown/CustomDropdown';
import React from 'react';

const data = [
  { label: 'All', value: 'all' },
  { label: 'Purple Mastercard', value: 'purpleMastercard' },
  { label: 'Blue Mastercard', value: 'blueMastercard' },
  { label: 'Yello Mastercard', value: 'yelloMastercard' },
  { label: 'Pink Mastercard', value: 'pinkMastercard' },
];


interface CardTypeProps {
  value?: string
  onChange?: (value: string) => void;
}

const CardType: React.FC<CardTypeProps> = ({ value, onChange }) => {
  return (
    <CustomDropdown
      isInModal
      label="Card type"
      data={data}
      value={value} // Pass the current value to the dropdown
      onChange={onChange} // Pass the onChange function to the dropdown
    />
  );
};

export default CardType;
