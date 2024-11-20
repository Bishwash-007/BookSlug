import React, { useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import "../../global.css";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TabIcon: React.FC<{ iconName: any; color: string; label: string; focused: boolean }> = ({ iconName, color, label, focused }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale value (1 means normal size)

  // Smooth scaling based on focused state
  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.3 : 1, // Scale up when focused, return to 1 when unfocused
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <View className="flex-col items-center justify-center gap-0.5 py-0.75 w-[80px] h-full">
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }], // Apply animated scale
        }}
      >
        <Ionicons
          name={iconName}
          size={26} // Icon size
          color={focused ? '#FFFFFF' : color} // White when focused, otherwise inactive color
        />
      </Animated.View>
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[10px]`}
        style={{
          color: focused ? '#FFFFFF' : color,
          textAlign: 'center',
          marginTop: 2, // Add space between icon and label
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFB800',
          tabBarInactiveTintColor: '#B0B3C5',
          tabBarStyle: {
            backgroundColor: '#12121C',
            borderTopColor: '#1C1E2A',
            height: 70, // Adjust tab height
            borderRadius: 20, // Rounded corners
            paddingBottom: 2,
            paddingTop: 12, // Add space between tab bar and content
            justifyContent: 'center', // Vertically center the icons
          },
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="home"
                label="Home"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="search"
                label="Explore"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="mylibrary"
          options={{
            title: 'My Library',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="library"
                label="Library"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="person"
                label="Profile"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
