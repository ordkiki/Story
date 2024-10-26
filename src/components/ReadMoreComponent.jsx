import Select from 'react-select';

const options = [
  { value: 'tout', label: 'All Genre' },
  { value: 'roman', label: 'Roman' },
  { value: 'fiction', label: 'Fiction' },
  { value: 'erotique', label: 'Erotique' }
];

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: '#f5f5f5',
    borderColor: '#cbd5e1',
    '&:hover': { borderColor: '#93c5fd' }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#93c5fd' : '#ffffff',
    color: '#1f2937',
    '&:active': { backgroundColor: '#3b82f6', color: '#ffffff' }
  })
};

export function SelectOption() {
  return <Select options={options} styles={customStyles} placeholder="Select Genre" />;
}
