import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';

type SelectionProps = {
  label: string;
  items: any[];
  fieldName: any;
  fieldId: any;
  value: any;
  onChange: (value: any) => void;
};

const Selection = ({ label, items = [], fieldName, fieldId, value, onChange }: SelectionProps) => {
  const [selected, setSelected] = useState(value);
  useEffect(() => {
    setSelected(value.toString());
  }, [value]);

  return (
    <div>
      <Select label={label} selectedKeys={[selected]} onChange={onChange}>
        {items.map(item => (
          <SelectItem key={item[fieldId].toString()}>{item[fieldName]}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Selection;
