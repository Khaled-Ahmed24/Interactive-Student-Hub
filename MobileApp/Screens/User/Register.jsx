import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        name: '',
        password: '',
        repeatPassword: '',
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isBlockedEmail = (email) => {
        return email === "admin@gmail.com";
      };

    const validateFullName = (name) => {
        const nameParts = name.trim().split(' ');
        const nameHasNumbers = /\d/.test(name);
        return nameParts.length >= 2 && !nameHasNumbers;
    };

    const formSubmitHandler = async () => {
        const validationErrors = {
            email: '',
            name: '',
            password: '',
            repeatPassword: '',
        };

        if (!validateEmail(email)) {
            validationErrors.email = "Please enter a valid email address.";
          } else if (isBlockedEmail(email)) {
            validationErrors.email = "This email address is not allowed.";
          }
        if (!validateFullName(name)) {
            validationErrors.name = 'Please enter a valid full name without numbers.';
        }

        if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long.';
        }

        if (password !== repeatPassword) {
            validationErrors.repeatPassword = 'Passwords do not match.';
        }

        if (Object.values(validationErrors).some(error => error !== '')) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch('http://192.168.1.2:5000/register/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name, grade }),
            });

            if (response.ok) {
                Alert.alert('Registration successful', 'You can now sign in.');
                navigation.navigate('Login');
            } else {
                Alert.alert('Registration failed', 'Please try again.');
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={styles.fci}>F C I</Text>
                    <TextInput
                        placeholder="Full Name"
                        style={[styles.input, errors.name ? styles.inputError : null]}
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                            setErrors({ ...errors, name: '' });
                        }}
                    />
                    {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

                    <TextInput
                        placeholder="Email"
                        style={[styles.input, errors.email ? styles.inputError : null]}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            setErrors({ ...errors, email: '' });
                        }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

                    <Picker
                        selectedValue={grade}
                        style={styles.input}
                        onValueChange={(itemValue) => setGrade(itemValue)}
                    >
                        <Picker.Item label="Entry Year" value="" />
                        {Array.from({ length: 4 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <Picker.Item key={year} label={year.toString()} value={year} />;
                        })}
                    </Picker>

                    <TextInput
                        placeholder="Password"
                        style={[styles.input, errors.password ? styles.inputError : null]}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            setErrors({ ...errors, password: '' });
                        }}
                        secureTextEntry
                    />
                    {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

                    <TextInput
                        placeholder="Repeat Password"
                        style={[styles.input, errors.repeatPassword ? styles.inputError : null]}
                        value={repeatPassword}
                        onChangeText={(text) => {
                            setRepeatPassword(text);
                            setErrors({ ...errors, repeatPassword: '' });
                        }}
                        secureTextEntry
                    />
                    {errors.repeatPassword ? <Text style={styles.error}>{errors.repeatPassword}</Text> : null}

                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.signInLink}>
                        <Text>Already have an account?
                            <Text style={styles.signInText}>Sign in</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={formSubmitHandler} style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f8fc',
        padding: 20,
    },
    card: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 900,
        height: 620,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    left: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    fci: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    p: {
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
    },
    input: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        color: '#333',
    },
    inputError: {
        borderColor: 'red',
    },
    signUpButton: {
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInLink: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        color: '#007BFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 4,
    },
});

export default RegisterScreen;
