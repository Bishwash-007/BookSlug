import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlepress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity 
            onPress={handlepress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading} // disable button if loading
        >
            {/* Show loading text or button title */}
            {isLoading ? (
                <Text className="text-white">Loading...</Text>
            ) : (
                <Text className={`text-white ${textStyles}`}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
