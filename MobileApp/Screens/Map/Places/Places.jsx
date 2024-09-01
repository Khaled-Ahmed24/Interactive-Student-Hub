import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const ExplorePlaces = () => {
  const [isLaboratoriesOpen, setIsLaboratoriesOpen] = useState(false);
  const [isDoctorsOfficesOpen, setIsDoctorsOfficesOpen] = useState(false);
  const [isLectureHallOpen, setIsLectureHallOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const navigation = useNavigation();
  
  const SelectedImageHandler = (title) =>{
    setSelectedImage(title);
    navigation.navigate('PlaceImage' , {title});
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://192.168.1.2:5000/login/check-login', {
          method: 'GET',
          credentials: 'include',
        });

        const data = await response.json();

        if (!data.loggedIn) {
          navigation.navigate('Login');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        navigation.navigate('Login');
      }
    };

    checkLoginStatus();
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const toggleSection = (section) => {
    switch (section) {
      case 'laboratories':
        setIsLaboratoriesOpen(!isLaboratoriesOpen);
        break;
      case 'doctorsOffices':
        setIsDoctorsOfficesOpen(!isDoctorsOfficesOpen);
        break;
      case 'lectureHall':
        setIsLectureHallOpen(!isLectureHallOpen);
        break;
      case 'other':
        setIsOtherOpen(!isOtherOpen);
        break;
      default:
        break;
    }
  };

  const handleClick = (room) => {
    SelectedImageHandler(room);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.heading}>أماكن كلية الحاسبات والمعلومات</Text>

        <TouchableOpacity style={styles.button} onPress={() => toggleSection('laboratories')}>
          <Text style={styles.buttonText}>المعامل</Text>
          <FontAwesome name={isLaboratoriesOpen ? 'chevron-down' : 'chevron-left'} style={styles.arrow} />
        </TouchableOpacity>
        {isLaboratoriesOpen && (
  <View style={styles.listContainer}>
    {[
      'معمل 0 - أ', 'معمل 0 - ب', 'معمل 0 - ج', 'معمل 0 - د', 'معمل 0 - ه',
      'معمل 1 - أ', 'معمل 1 - ب', 'معمل 1 - ج', 'معمل 1 - د', 'معمل 1 - ه',
      'معمل 2 - أ', 'معمل 2 - ب', 'معمل 2 - ج', 'معمل 2 - د', 'معمل 2 - ه',
      'معمل 3 - أ', 'معمل 3 - ب', 'معمل 3 - ج', 'معمل 3 - د', 'معمل 3 - ه',
      'معمل 4 - أ', 'معمل 4 - ب', 'معمل 4 - ج', 'معمل 4 - د', 'معمل 4 - ه'
    ].map((lab) => (
      <TouchableOpacity key={lab} style={styles.listItem} onPress={() => handleClick(lab)}>
        <Text style={styles.listItemText}>{lab}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}

        <TouchableOpacity style={styles.button} onPress={() => toggleSection('doctorsOffices')}>
          <Text style={styles.buttonText}>مكاتب الدكاترة</Text>
          <FontAwesome name={isDoctorsOfficesOpen ? 'chevron-down' : 'chevron-left'} style={styles.arrow} />
        </TouchableOpacity>
        {isDoctorsOfficesOpen && (
  <View style={styles.listContainer}>
    {[
      'أ.د. عادل أبو المجد', 'أ.د. مرغني حسن', 'د. عبدالرحمن حيدر',
      'د. خالد فتحي', 'د. ماجد عسكر', 'د. ممدوح فاروق',
      'د. محمد مصطفى', 'د. مصطفى أبو بكر', 'د. سارة طارق',
      'أ.د. يوسف بسيوني مهدي', 'د. سها أحمد', 'أ.د. حسنى محمد ابراهيم',
      'د. داليا محمد', 'د. طارق محمد', 'د. نجوي محمد',
      'د. إسلام تاج الدين', 'د. فاطمة عبد العليم', 'د. ابرام كمال',
      'د. علي حسين', 'د. مصطفي قرشي'
    ].map((doctor) => (
      <TouchableOpacity key={doctor} style={styles.listItem} onPress={() => handleClick(doctor)}>
        <Text style={styles.listItemText}>{doctor}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}


        <TouchableOpacity style={styles.button} onPress={() => toggleSection('lectureHall')}>
          <Text style={styles.buttonText}>قاعة المحاضرات</Text>
          <FontAwesome name={isLectureHallOpen ? 'chevron-down' : 'chevron-left'} style={styles.arrow} />
        </TouchableOpacity>
        {isLectureHallOpen && (
  <View style={styles.listContainer}>
    {[
      'مدرج 1', 'مدرج 2', 'مدرج 3', 'مدرج 4', 'مدرج 5',
      'مدرج 6', 'مدرج 7', 'مدرج 8', 'مدرج 9', 'مدرج 1-أ',
      'مدرج 2-أ', 'مدرج 3-أ', 'مدرج 4-أ'
    ].map((hall) => (
      <TouchableOpacity key={hall} style={styles.listItem} onPress={() => handleClick(hall)}>
        <Text style={styles.listItemText}>{hall}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}


        <TouchableOpacity style={styles.button} onPress={() => toggleSection('other')}>
          <Text style={styles.buttonText}>أخرى</Text>
          <FontAwesome name={isOtherOpen ? 'chevron-down' : 'chevron-left'} style={styles.arrow} />
        </TouchableOpacity>
        {isOtherOpen && (
  <View style={styles.listContainer}>
    {[
      'رعاية الشباب', 'شؤون الطلاب', 'صالة الانشطة',
      'مصلى طلبة', 'مصلى الطالبات', 'المكتبة',
      'Free lab', 'ICPC Room'
    ].map((other) => (
      <TouchableOpacity key={other} style={styles.listItem} onPress={() => handleClick(other)}>
        <Text style={styles.listItemText}>{other}</Text>
      </TouchableOpacity>
    ))}
  </View>
)}

      </View>

      <View style={styles.content}>
        {selectedImage ? (
          <View style={styles.imageContainer}>
            <Image source={selectedImage} style={styles.image} />
          </View>
        ) : (
          <Text>اختر موقعًا لعرض الصورة</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebar: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  listContainer: {
    paddingLeft: 10,
  },
  listItem: {
    backgroundColor: '#f1f1f1',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    color: 'black',
  },
  arrow: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 200, // Adjust height as needed
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExplorePlaces;
