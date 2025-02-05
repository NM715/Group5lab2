import React from "react";
import { Button } from "react-native";


type IncrementProps = {
    value: number;
    setValue: (value: number) => void; 
};

const IncrementButton: React.FC<IncrementProps> = ({ value, setValue }) => {
    const handleIncrement = () => {
        setValue(value + 1);
    };

    return (
        <Button
            title="Increment"
            onPress={handleIncrement}
        />
    );
};

export default IncrementButton; 


