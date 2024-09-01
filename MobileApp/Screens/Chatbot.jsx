import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const renderTableAvailability = (jsonData) => {
    return (
        <ScrollView horizontal style={styles.tableWrapper}>
            <View style={styles.table}>
                {jsonData.map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={[
                            styles.tr,
                            rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
                        ]}
                    >
                        {row.map((cell, cellIndex) => (
                            <Text
                                key={cellIndex}
                                style={[styles.td, cellIndex === 0 ? styles.firstColumn : {}]}
                            >
                                {cell}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const renderTableSchedule = (jsonData) => {
    const timeSlots = [" ", "8:10", "10:12", "12:2", "2:4"];

    return (
        <ScrollView horizontal style={styles.tableWrapper}>
            <View style={styles.table}>
                <View style={styles.headerRow}>
                    {timeSlots.map((timeSlot, index) => (
                        <View key={index} style={[styles.headerCell, { width: 100 }]}>
                            <Text style={styles.headerText}>{timeSlot}</Text>
                        </View>
                    ))}
                </View>
                {jsonData.map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={[
                            styles.row,
                            rowIndex % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd,
                        ]}
                    >
                        {row.map((cell, cellIndex) => (
                            <View
                                key={cellIndex}
                                style={[styles.cell, { width: 100 }]} 
                            >
                                <Text style={styles.cellText}>{cell || '-'}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};


const ChatbotScreen = () => {
    const [messages, setMessages] = useState([
        { text: "I am a chatbot here to help you.", sender: "bot" },
    ]);
    const [options, setOptions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [availabilityData, setAvailabilityData] = useState(null);
    const [noDataFound, setNoDataFound] = useState(false);
    const chatWindowRef = useRef(null);
    const navigation = useNavigation();
    const faq = {
        "What are the professor appointment hours?": {
          "Computer Science": {
            "Dr. Ahmed Hosny": "Not Found",
            "Dr. Khaled Fathy": "Not Found",
          },
          "Information System": {
            "Dr. Ibrahim Al-Awadhi": "Not Found",
            "Dr. Suha": "Not Found",
          },
          "Information Technology": {
            "Dr. Nagwa": "Not Found",
          },
        },
        "What is the lecture schedule?": {
          "First Year": "Details about the first year schedule",
          "Second Year": "Details about the second year schedule",
          "Third Year": "Details about the third year schedule",
          "Fourth Year": "Details about the fourth year schedule",
        },
        "Where can I find places in the college?": {
          "Lecture Halls": {
            "مدرج 1": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 2": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 3": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 4": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 5": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 6": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 7": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 8": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 9": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 1-أ": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 2-أ": "You can find it on the labs section of the college map page. Click here to view it",
            "مدرج 3-أ": "You can find it on the lecture halls section of the college map page. Click here to view it",
            "مدرج 4-أ": "You can find it on the lecture halls section of the college map page. Click here to view it",
          },
          "Laboratories": {
            "معمل 0 - أ": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 0 - ب": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 0 - ج": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 0 - د": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 0 - ه": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 1 - أ": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 1 - ب": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 1 - ج": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 1 - د": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 1 - ه": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 2 - أ": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 2 - ب": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 2 - ج": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 2 - د": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 2 - ه": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 3 - أ": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 3 - ب": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 3 - ج": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 3 - د": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 3 - ه": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 4 - أ": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 4 - ب": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 4 - ج": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 4 - د": "You can find it on the Laboratories section of the college map page. Click here to view it",
            "معمل 4 - ه": "You can find it on the Laboratories section of the college map page. Click here to view it",
          },
          "Professors Offices": {
            "أ.د. عادل أبو المجد": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "أ.د. مرغني حسن": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. عبدالرحمن حيدر": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. خالد فتحي": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. ماجد عسكر": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. ممدوح فاروق": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. محمد مصطفى": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. مصطفى أبو بكر": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. سارة طارق": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "أ.د. يوسف بسيوني مهدي": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. سها أحمد": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "أ.د. حسنى محمد ابراهيم": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. داليا محمد": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. طارق محمد": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. نجوي محمد": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. إسلام تاج الدين": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. فاطمة عبد العليم": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. ابرام كمال": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. علي حسين": "You can find it on the Professors Offices section of the college map page. Click here to view it",
            "د. مصطفي قرشي": "You can find it on the Professors Offices section of the college map page. Click here to view it",
          },
          "Others": {
            "رعاية الشباب": "You can find it on the Others section of the college map page. Click here to view it",
            "شؤون الطلاب": "You can find it on the Others section of the college map page. Click here to view it",
            "Free lab": "You can find it on the Others section of the college map page. Click here to view it",
            "صالة الانشطة": "You can find it on the Others section of the college map page. Click here to view it",
            "مصلى طلبة": "You can find it on the Others section of the college map page. Click here to view it",
            "مصلى الطالبات": "You can find it on the Others section of the college map page. Click here to view it",
            "المكتبة": "You can find it on the Others section of the college map page. Click here to view it",
            "ICPC Room": "You can find it on the Others section of the college map page. Click here to view it",
          },
        },
        "What are the Faculty Regulations?": "pdf",
      };

      const handleClick = (question) => {
        const ans = options ? options[question] : faq[question];
        if (ans === "pdf") {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: question, sender: "user" },
                { type: "image", src: require("../assets/regulation/Basic.jpg") },
            ]);
            setOptions(null);
        } else if (typeof ans === "object") {
            setOptions(ans);
        } else if (
            question === "First Year" ||
            question === "Second Year" ||
            question === "Third Year" ||
            question === "Fourth Year"
        ) {
            fetchScheduleData(question);
        } else if (
            faq["What are the professor appointment hours?"]["Computer Science"][question] ||
            faq["What are the professor appointment hours?"]["Information System"][question] ||
            faq["What are the professor appointment hours?"]["Information Technology"][question]
        ) {
            fetchAvailabilityData(question);
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: question, sender: "user" },
                {
                    text: ans || "Sorry, I don't have information on that.",
                    sender: "bot",
                },
            ]);
            setOptions(null);
        }
    };
    
    const fetchAvailabilityData = async (professor) => {
        setAvailabilityData(null);
        setNoDataFound(false);
        try {
            const response = await fetch(
                `http://192.168.1.2:5000/professorAvailability/getAvailability?professor=${encodeURIComponent(professor)}`
            );
            if (response.ok) {
                const data = await response.json();
                const jsondata =
                    typeof data.jsondata === "string"
                        ? data.jsondata
                        : JSON.stringify(data.jsondata);
                const parsedData = JSON.parse(jsondata);
                if (parsedData && parsedData.length > 0) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { text: `Availability for ${professor}:`, sender: "bot", type: "availability", data: parsedData },
                    ]);
                } else {
                    setNoDataFound(true);
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        {
                            text: `No availability data found for ${professor}.`,
                            sender: "bot",
                        },
                    ]);
                }
            } else {
                console.error("Failed to fetch availability data", await response.text());
            }
        } catch (error) {
            console.error("Error fetching availability data:", error);
        }
    };
    
    const fetchScheduleData = async (year) => {
        setAvailabilityData(null);
        setNoDataFound(false);
        try {
            const response = await fetch(
                `http://192.168.1.2:5000/schedule/getSchedule?year=${encodeURIComponent(year)}`
            );
            if (response.ok) {
                const data = await response.json();
                const parsedData = JSON.parse(data.jsondata);
                if (parsedData && parsedData.length > 0) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { text: `Lecture schedule for ${year}:`, sender: "bot", type: "schedule", data: parsedData },
                    ]);
                } else {
                    setNoDataFound(true);
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        {
                            text: `No lecture schedule data found for ${year}.`,
                            sender: "bot",
                        },
                    ]);
                }
            } else {
                console.error("Failed to fetch schedule data", await response.text());
            }
        } catch (error) {
            console.error("Error fetching schedule data:", error);
        }
    };
    

    const getOptions = () => (options ? Object.keys(options) : Object.keys(faq));

    const renderMessageContent = (msg) => {
        if (msg.type === "schedule") {
            return renderTableSchedule(msg.data);
        } else if (msg.type === "availability") {
            return renderTableAvailability(msg.data);
        } else if (msg.type === "image") {
            return (
                <View style={styles.imageContainer}>
                    <Image source={msg.src} style={styles.image} resizeMode="contain" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Regulation')}
                        style={styles.pdfButton}
                    >
                        <Text style={styles.pdfButtonText}>See in detail</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (msg.text && msg.text.includes("Click here to view it")) {
            const [beforeText, buttonText] = msg.text.split("Click here to view it");
            return (
                <View style={styles.textContainer}>
                    <Text>{beforeText}</Text>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Map')}}
                        style={styles.linkButton}
                    >
                        <Text style={styles.linkButtonText}>Click here to view it</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return <Text>{msg.text}</Text>;
        }
    };
    
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch(
                    "http://192.168.1.2:5000/login/check-login",
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );
                const data = await response.json();
                if (!data.loggedIn) {
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error checking login status:", error);
            }
        };
        checkLoginStatus();
    }, []);

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    return (
        <View style={styles.container}>
            <View style={styles.chatbotContainer}>
                <Text style={styles.text}>College Chatbot</Text>
                <ScrollView style={styles.chatWindow} ref={chatWindowRef}>
                    {messages.map((msg, index) => (
                        <View
                            key={index}
                            style={
                                msg.sender === "user" ? styles.userMessage : styles.botMessage
                            }
                        >
                            <View style={styles.messageContainer}>
                                {msg.sender && msg.sender !== "user" && (
                                    <Image
                                        source={
                                            msg.sender === "bot"
                                                ? require("../assets/images/bot-icon.png")
                                                : require("../assets/images/user-icon.png")
                                        }
                                        style={msg.sender === "user" ? styles.userIcon : styles.botIcon}
                                    />
                                )}
                                {renderMessageContent(msg)}
                            </View>
                        </View>
                    ))}
                    {noDataFound && (
                        <Text style={styles.noDataMessage}>
                            No availability data found for this professor.
                        </Text>
                    )}
                </ScrollView>
                <ScrollView style={styles.questionsContainer}>
                    {getOptions().map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                if (options) {
                                    setOptions(null);
                                }
                                handleClick(option);
                            }}
                            style={styles.questionButton}
                        >
                            <Text style={styles.buttonText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    chatbotContainer: {
        height: '95%',
        maxHeight: '95%',
        width: '95%',
        maxWidth: '95%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    chatWindow: {
        height: 460,
        padding: 10,
    },
    botMessage: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#eceff1',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    },
    userMessage: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4caf50',
        color: '#ffffff',
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    questionsContainer: {
        paddingBottom: 37,
        backgroundColor: '#ffffff',
    },
    questionButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'black',
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    botIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10,
    },
    userIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tableWrapper: {
        maxHeight: 400,
        width: '100%',
    },
    table: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
    },
    headerCell: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellText: {
        fontSize: 14,
    },
    firstColumn: {
        flex: 0,
        width: 100,
    },
    tableRowEven: {
        backgroundColor: '#f5f5f5',
    },
    tableRowOdd: {
        backgroundColor: '#ffffff',
    },
    pdfViewer: {
        height: 500,
    },
    pdfButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
        width: 150,
    },
    pdfButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    noDataMessage: {
        fontSize: 16,
        color: '#f44336',
        textAlign: 'center',
        marginVertical: 20,
    },
    linkButton:{
        backgroundColor: '#bfecf3',
        padding: 7, 
        borderRadius: 5,
    },
    imageContainer: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        width: '90%', // Adjust the width based on your needs
      },
      image: {
        width: '100%',
        height: 400, // Adjust height based on the image aspect ratio
      },
});
export default ChatbotScreen;
