import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";

interface ContentsListProps {
  onItemClick: (item: string) => void;
}

const ContentsList: React.FC<ContentsListProps> = ({ onItemClick }) => {
  const items = [
    "الرؤيه والرساله",
    "أهداف الكلية",
    "أقسام الكلية",
    "الدرجات العلمية",
    "شروط القبول بالكلية",
    "نظام الدراسة",
    "لغة التدريس",
    "مواعيد الدراسة والتخرج",
    "التسجيل والحذف والإضافة",
    "الانسحاب من المقرر",
    "الإرشاد الأكاديمي",
    "المواظبة والغياب",
    "الانقطاع عن الدراسة",
    "نظام الامتحانات",
    "نظام التقييم",
    "الرسوب والاعاده",
    "السجل الاكاديمي",
    "وضع الطالب تحت الملاحظه الاكاديميه وفصله من الكليه",
    "الانذار",
    "احكام تنظيميه",
    "تطبيق قانون تنظيم الجامعات ولائحته التنفذيه",
    "تطبيق اللائحه",
    "المقررات الدراسيه",
    "ساعات التمارين النظريه والعمليه",
    "قواعد النظام الكودي للمقررات الدراسيه",
    "المتطلبات العامه",
    "متطلبات الكليه",
    "متطلبات التخصص",
    "متطلبات التدريب والتعلم الذاتي",
    "مستويات ومتطلبات المقررات",
    "ملحق المواد العلمية",
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>المحتويات</Text>
        </View>
        <View style={styles.list}>
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.item}
              onPress={() => onItemClick(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ContentsList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden', 
    paddingVertical: 25,
  },
  scrollContainer: {
    width: '100%',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  list: {
    flex: 1,
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 16, 
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});
