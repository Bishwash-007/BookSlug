import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import '../global.css'

const CustomButton: React.FC<{
  title: string;
  handlepress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}> = ({ title, handlepress, containerStyles = '', textStyles = '', isLoading = false }) => {
  return (
    <TouchableOpacity
      onPress={handlepress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading} // disable button if loading
    >
      {/* Show loading text or button title */}
      {isLoading ? (
        <Text className="text-primary ">Loading...</Text>
      ) : (
        <Text className={`text-primary ${textStyles}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
