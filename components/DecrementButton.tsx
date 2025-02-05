import React from "react";
import { Button } from "react-native";


type DecrementProps = {
    value: number;
    setValue: (value: number) => void; 
};


const DecrementButton: React.FC<DecrementProps> = ({ value, setValue }) => {


    const handleDecrement = () => {
        setValue(value - 1);
    };

    return (
        <Button
            title="Decrement"
            onPress={handleDecrement} 
        />
    );
};

export default DecrementButton;
