import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';

type SelectionProps = {
  label: string;
  items: any[];
  fieldName: any;
  fieldId: any;
  value: any;
  onChange: (value: any) => void;
  fullWidth?: boolean;
};

export const SelectInput = ({ label, items = [], fieldName, fieldId, value, onChange, fullWidth = true }: SelectionProps) => {
  const [selected, setSelected] = useState(value);
  useEffect(() => {
    if(!value){
      setSelected("")
      return
    }
    setSelected(value.toString());
  }, [value]);

  return (
    

      <Select label={label} selectedKeys={[selected]} onChange={onChange}
      fullWidth={fullWidth}
      >
        {items.map(item => (
          
          <SelectItem key={item[fieldId].toString()}>{item[fieldName]}</SelectItem>
        ))}
      </Select>
    
  );
};


