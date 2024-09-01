import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';

const RegulationImagesScreen = ({route}) => {
    const { image } = route.params;
    const images = {
        "الرؤيه والرساله":[
            require('../../assets/regulation/vision.jpg'),
        ],
        "أهداف الكلية":[
            require('../../assets/regulation/1.jpg'),
        ],
        "أقسام الكلية":[
            require('../../assets/regulation/2.1.jpg'),
            require('../../assets/regulation/2.2.jpg'),
        ],
        "الدرجات العلمية":[
            require('../../assets/regulation/3.jpg'),
        ],
        "شروط القبول بالكلية":[
            require('../../assets/regulation/4.jpg'),
        ],
        "نظام الدراسة":[
            require('../../assets/regulation/5.jpg'),
        ],
        "لغة التدريس":[
            require('../../assets/regulation/6.jpg'),
        ],
        "مواعيد الدراسة والتخرج":[
            require('../../assets/regulation/7.jpg'),
        ],
        "التسجيل والحذف والإضافة":[
            require('../../assets/regulation/8.jpg'),
        ],
        "الانسحاب من المقرر":[
            require('../../assets/regulation/9.jpg'),
        ],
        "الإرشاد الأكاديمي":[
            require('../../assets/regulation/10.jpg'),
        ],
        "المواظبة والغياب":[
            require('../../assets/regulation/11.jpg'),
        ],
        "الانقطاع عن الدراسة":[
            require('../../assets/regulation/12.jpg'),
        ],
        "نظام الامتحانات":[
            require('../../assets/regulation/13.jpg'),
        ],
        "نظام التقييم":[
            require('../../assets/regulation/14.1.jpg'),
            require('../../assets/regulation/14.2.jpg'),
        ],
        "الرسوب والاعاده":[
            require('../../assets/regulation/15.jpg'),
        ],
        "السجل الاكاديمي":[
            require('../../assets/regulation/16.jpg'),
        ],
        "وضع الطالب تحت الملاحظه الاكاديميه وفصله من الكليه":[
            require('../../assets/regulation/17.jpg'),
        ],
        "الانذار":[
            require('../../assets/regulation/18.jpg'),
        ],
        "احكام تنظيميه":[
            require('../../assets/regulation/19.jpg'),
        ],
        "تطبيق قانون تنظيم الجامعات ولائحته التنفذيه":[
            require('../../assets/regulation/20.jpg'),
        ],
        "تطبيق اللائحه":[
            require('../../assets/regulation/21.jpg'),
        ],
        "المقررات الدراسيه":[
            require('../../assets/regulation/22.jpg'),
        ],
        "ساعات التمارين النظريه والعمليه":[
            require('../../assets/regulation/23.jpg'),
        ],
        "قواعد النظام الكودي للمقررات الدراسيه":[
            require('../../assets/regulation/24.1.jpg'),
            require('../../assets/regulation/24.2.jpg'),
        ],
        "المتطلبات العامه":[
            require('../../assets/regulation/25.jpg'),
        ],
        "متطلبات الكليه":[
            require('../../assets/regulation/26.1.jpg'),
            require('../../assets/regulation/26.2.jpg'),
        ],
        "متطلبات التخصص":[
            require('../../assets/regulation/27.1.jpg'),
            require('../../assets/regulation/27.2.jpg'),
            require('../../assets/regulation/27.3.jpg'),
            require('../../assets/regulation/27.4.jpg'),
        ],
        "متطلبات التدريب والتعلم الذاتي":[
            require('../../assets/regulation/28.jpg'),
        ],
        "مستويات ومتطلبات المقررات":[
            require('../../assets/regulation/29.1.jpg'),
            require('../../assets/regulation/29.2.jpg'),
            require('../../assets/regulation/29.3.jpg'),
            require('../../assets/regulation/29.4.jpg'),
            require('../../assets/regulation/29.5.jpg'),
            require('../../assets/regulation/29.6.jpg'),
            require('../../assets/regulation/29.7.jpg'),
            require('../../assets/regulation/29.8.jpg'),
            require('../../assets/regulation/29.9.jpg'),
            require('../../assets/regulation/29.10.jpg'),
            require('../../assets/regulation/29.11.jpg'),
            require('../../assets/regulation/29.12.jpg'),
            require('../../assets/regulation/29.13.jpg'),
        ],
        "ملحق المواد العلمية":[
            require('../../assets/regulation/ref1.jpg'),
            require('../../assets/regulation/ref2.jpg'),
            require('../../assets/regulation/ref3.jpg'),
            require('../../assets/regulation/ref4.jpg'),
            require('../../assets/regulation/ref5.jpg'),
            require('../../assets/regulation/ref6.jpg'),
            require('../../assets/regulation/ref7.jpg'),
            require('../../assets/regulation/ref8.jpg'),
            require('../../assets/regulation/ref9.jpg'),
            require('../../assets/regulation/ref10.jpg'),
            require('../../assets/regulation/ref11.jpg'),
            require('../../assets/regulation/ref12.jpg'),
            require('../../assets/regulation/ref13.jpg'),
            require('../../assets/regulation/ref14.jpg'),
            require('../../assets/regulation/ref15.jpg'),
            require('../../assets/regulation/ref16.jpg'),
            require('../../assets/regulation/ref17.jpg'),
            require('../../assets/regulation/ref18.jpg'),
            require('../../assets/regulation/ref19.jpg'),
            require('../../assets/regulation/ref20.jpg'),
            require('../../assets/regulation/ref21.jpg'),
            require('../../assets/regulation/ref22.jpg'),
            require('../../assets/regulation/ref23.jpg'),
            require('../../assets/regulation/ref24.jpg'),
            require('../../assets/regulation/ref25.jpg'),
            require('../../assets/regulation/ref26.jpg'),
            require('../../assets/regulation/ref27.jpg'),
            require('../../assets/regulation/ref28.jpg'),
        ],
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{image}</Text>
          {images[image]?.map((img, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={img} style={styles.image} resizeMode="contain" />
            </View>
          )) || (
            <Text style={styles.noImage}>No images available</Text> // Fallback UI for no images
          )}
        </ScrollView>
      );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
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
  noImage: {
    fontSize: 18,
    color: '#999',
  },
});

export default RegulationImagesScreen;
