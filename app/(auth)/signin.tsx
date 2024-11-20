import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    if (!form.email || !form.password) {
      alert('Please fill in both email and password.');
      return;
    }

    setIsSubmitting(true);

    // Simulate authentication process
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Login successful! Redirecting...');
    }, 2000);
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          {/* Logo */}
          <Image
            source={images.logo}
            className="w-[130px] min-h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-4xl text-white font-bold mt-4">BookSlug</Text>

          {/* Email Field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                email: e,
              }))
            }
            otherStyle="mt-7"
            keyboardType="email-address"
            placeholder="Enter your email"
          />

          {/* Password Field */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm((prevForm) => ({
                ...prevForm,
                password: e,
              }))
            }
            otherStyle="mt-7"
            placeholder="Enter your password"
          />

          {/* Submit Button */}
          <CustomButton
            title="Sign in"
            handlepress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
        </View>

        <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/signup" className="text-lg font-psemibold text-secondary">
              Sign Up
            </Link>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
