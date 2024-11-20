import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const FormField: React.FC<{
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyle?: string;
  [key: string]: any;
}> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle = '',
  ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <View className={`space-y-2 ${otherStyle}`}>
        {/* Title */}
        <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
  
        {/* Input Field with Eye Icon */}
        <View className="border-2 border-gray-200 w-full h-16 px-4 bg-gray-100 rounded-2xl focus:border-secondary flex-row items-center">
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={handleChangeText}
            secureTextEntry={title.toLowerCase() === 'password' && !showPassword}
            placeholderTextColor="#7b7b8b"
            className="flex-1 text-black"
            {...props} // Spread additional props
          />
          {/* Eye Icon for Password Visibility */}
          {title.toLowerCase() === 'password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#7b7b8b"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  
  export default FormField;