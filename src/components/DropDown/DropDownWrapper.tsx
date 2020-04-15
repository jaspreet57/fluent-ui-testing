import React from 'react'
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react';

interface DropDownWrapperProps {
    handleChange: (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined) => void;
    options: IDropdownOption[]
    [key: string]: any
}

const DropDownWrapper: React.FC<DropDownWrapperProps> = ({ handleChange, options, ...props }) => {
    return (
        <Dropdown
            placeholder="Required with no label"
            ariaLabel="Required dropdown example"
            onChange={handleChange}
            options={options}
            required={true}
            styles={{ dropdown: { width: 300 } }}
            {...props}
        />
    )
}

export {
    DropDownWrapper
}