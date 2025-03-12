import CustomDropdown from '../CustomDropdown/CustomDropdown';
import React from 'react';

const data = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  { label: 'Miss', value: 'miss' },
  { label: 'Ms', value: 'ms' },
  { label: 'Dr', value: 'dr' },
  { label: 'Mx', value: 'mx' },
];


interface ProfessionalTitleProps {
  value?: string
  onChange?: (value: string) => void;
}

const ProfessionalTitle: React.FC<ProfessionalTitleProps> = ({ value, onChange }) => {
  // Find the selected item based on the value
  const selectedItem = data.find((item) => item.label === value)?.value;
  return (
    <CustomDropdown
      label="Title *"
      data={data}
      value={selectedItem} // Pass the current value to the dropdown
      onChange={onChange} // Pass the onChange function to the dropdown
    />
  );
};

export default ProfessionalTitle;
