import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { Camera, useCameraDevices, useCameraPermission } from 'react-native-vision-camera';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CameraScreen() {
    const { hasPermission, requestPermission } = useCameraPermission();
    const devices = useCameraDevices();
    const device = devices.find((device) => device.position === 'back');
    const camera = useRef<Camera>(null);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [hasPermission, requestPermission]);

    const takePhoto = async () => {
        if (camera.current) {
            try {
                const photo = await camera.current.takePhoto();
                console.log('Photo taken:', photo.path);
                Alert.alert('Success', 'Photo captured successfully!');
            } catch (error) {
                console.error('Error taking photo:', error);
                Alert.alert('Error', 'Failed to take photo');
            }
        }
    };

    if (!hasPermission) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
                <Text className="text-lg text-gray-700 mb-4">Camera permission is required</Text>
                <Pressable
                    className="bg-blue-500 px-6 py-3 rounded-lg"
                    onPress={requestPermission}
                >
                    <Text className="text-white font-semibold">Grant Permission</Text>
                </Pressable>
            </SafeAreaView>
        );
    }

    if (!device) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
                <Text className="text-lg text-gray-700">No camera device found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-1">
                <Camera
                    ref={camera}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={isActive}
                    photo={true}
                />

                {/* Camera Controls */}
                <View className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6">
                    <View className="flex-row justify-center items-center space-x-8">
                        {/* Gallery Button */}
                        <Pressable
                            className="w-12 h-12 bg-gray-600 rounded-full justify-center items-center"
                            onPress={() => Alert.alert('Gallery', 'Gallery feature coming soon!')}
                        >
                            <Text className="text-white text-xs">📷</Text>
                        </Pressable>

                        {/* Capture Button */}
                        <Pressable
                            className="w-20 h-20 bg-white rounded-full justify-center items-center border-4 border-gray-300"
                            onPress={takePhoto}
                        >
                            <View className="w-16 h-16 bg-white rounded-full" />
                        </Pressable>

                        {/* Switch Camera Button */}
                        <Pressable
                            className="w-12 h-12 bg-gray-600 rounded-full justify-center items-center"
                            onPress={() => Alert.alert('Switch Camera', 'Camera switch feature coming soon!')}
                        >
                            <Text className="text-white text-xs">🔄</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
