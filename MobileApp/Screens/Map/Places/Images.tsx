import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
function PlaceImage({route}){
    const {title} = route.params;
    console.log(title);
    let img;
    switch (title) {
        case "أ.د. عادل أبو المجد":
            console.log("right bro:)");
          img = require("../../../assets/Locations/Offices/First Floor/2.png");
          break;
        case "أ.د. مرغني حسن":
          img = require("../../../assets/Locations/Offices/First Floor/3.png");
          break;
        case "د. عبدالرحمن حيدر":
          img = (require("../../../assets/Locations/Offices/First Floor/4.png"));
          break;
        case "د. خالد فتحي":
          img = (require("../../../assets/Locations/Offices/First Floor/5.png"));
          break;
        case "د. ماجد عسكر":
          img = (require("../../../assets/Locations/Offices/First Floor/6.png"));
          break;
        case "د. ممدوح فاروق":
          img = (require("../../../assets/Locations/Offices/First Floor/6.png"));
          break;
        case "د. محمد مصطفى":
          img = (require("../../../assets/Locations/Offices/First Floor/7.png"));
          break;
        case "د. مصطفى أبو بكر":
          img = (require("../../../assets/Locations/Offices/First Floor/8.png"));
          break;
        case "د. سارة طارق":
          img = (require("../../../assets/Locations/Offices/First Floor/9.png"));
          break;
        case "أ.د. يوسف بسيوني مهدي":
          img = (require("../../../assets/Locations/Offices/First Floor/12.png"));
          break;
        case "د. سها أحمد":
          img = (require("../../../assets/Locations/Offices/Second Floor/4.png"));
          break;
        case " أ.د. حسنى محمد ابراهيم":
          img = (require("../../../assets/Locations/Offices/Third Floor/18.png"));
          break;
        case "  د. داليا محمد":
          img = (require("../../../assets/Locations/Offices/Third Floor/17.png"));
          break;
        case "  د. طارق محمد":
          img = (require("../../../assets/Locations/Offices/Third Floor/16.png"));
          break;
        case "  د. نجوي محمد":
          img = (require("../../../assets/Locations/Offices/Third Floor/15.png"));
          break;
        case "د. إسلام تاج الدين":
          img = (require("../../../assets/Locations/Offices/Third Floor/14.png"));
          break;
        case "د. فاطمة عبد العليم":
          img = (require("../../../assets/Locations/Offices/Third Floor/13.png"));
          break;
        case "د. ابرام كمال":
          img = (require("../../../assets/Locations/Offices/Third Floor/12.png"));
          break;
        case "د. علي حسين":
          img = (require("../../../assets/Locations/Offices/Third Floor/12.png"));
          break;
        case "د. مصطفي قرشي":
          img = (require("../../../assets/Locations/Offices/Third Floor/11.png"));
          break;
        case "معمل 0 - أ":
          img = (require("../../../assets/Locations/Labs/Ground Floor/3.png"));
          break;
        case "معمل 0 - ب":
          img = (require("../../../assets/Locations/Labs/Ground Floor/5.png"));
          break;
        case "معمل 0 - ج":
          img = (require("../../../assets/Locations/Labs/Ground Floor/7.png"));
          break;
        case "معمل 0 - د":
          img = (require("../../../assets/Locations/Labs/Ground Floor/9.png"));
          break;
        case "معمل 0 - ه":
          img = (require("../../../assets/Locations/Labs/Ground Floor/11.png"));
          break;
        case "معمل 1 - أ":
          img = (require("../../../assets/Locations/Labs/First Floor/18.png"));
          break;
        case "معمل 1 - ب":
          img = (require("../../../assets/Locations/Labs/First Floor/20.png"));
          break;
        case "معمل 1 - ج":
          img = (require("../../../assets/Locations/Labs/First Floor/22.png"));
          break;
        case "معمل 1 - د":
          img = (require("../../../assets/Locations/Labs/First Floor/24.png"));
          break;
        case "معمل 1 - ه":
          img = (require("../../../assets/Locations/Labs/First Floor/26.png"));
          break;
        case "معمل 2 - أ":
          img = (require("../../../assets/Locations/Labs/Second Floor/14.png"));
          break;
        case "معمل 2 - ب":
          img = (require("../../../assets/Locations/Labs/Second Floor/15.png"));
          break;
        case "معمل 2 - ج":
          img = (require("../../../assets/Locations/Labs/Second Floor/16.png"));
          break;
        case "معمل 2 - د":
          img = (require("../../../assets/Locations/Labs/Second Floor/18.png"));
          break;
        case "معمل 2 - ه":
          img = (require("../../../assets/Locations/Labs/Second Floor/20.png"));
          break;
        case "معمل 3 - أ":
          img = (require("../../../assets/Locations/Labs/Third Floor/7.png"));
          break;
        case "معمل 3 - ب":
          img = (require("../../../assets/Locations/Labs/Third Floor/6.png"));
          break;
        case "معمل 3 - ج":
          img = (require("../../../assets/Locations/Labs/Third Floor/5.png"));
          break;
        case "معمل 3 - د":
          img = (require("../../../assets/Locations/Labs/Third Floor/3.png"));
          break;
        case "معمل 3 - ه":
          img = (require("../../../assets/Locations/Labs/Third Floor/1.png"));
          break;
        case "معمل 4 - أ":
          img = (require("../../../assets/Locations/Labs/Fourth Floor/9.png"));
          break;
        case "معمل 4  - ب":
          img = (require("../../../assets/Locations/Labs/Fourth Floor/11.png"));
          break;
        case "معمل 4  - ج":
          img = (require("../../../assets/Locations/Labs/Fourth Floor/13.png"));
          break;
        case "معمل 4 - د":
          img = (require("../../../assets/Locations/Labs/Fourth Floor/15.png"));
          break;
        case "معمل 4 - ه":
          img = (require("../../../assets/Locations/Labs/Fourth Floor/17.png"));
          break;
        case "مدرج 1":
          img = (require("../../../assets/Locations/Halls/1.png"));
          break;
        case "مدرج 2":
          img = (require("../../../assets/Locations/Halls/2.png"));
          break;
        case "مدرج 3":
          img = (require("../../../assets/Locations/Halls/3.png"));
          break;
        case "مدرج 4":
          img = (require("../../../assets/Locations/Halls/4.png"));
          break;
        case "مدرج 5":
          img = (require("../../../assets/Locations/Halls/5.png"));
          break;
        case "مدرج 6":
          img = (require("../../../assets/Locations/Halls/6.png"));
          break;
        case "مدرج 7":
          img = (require("../../../assets/Locations/Halls/7.png"));
          break;
        case "مدرج 8":
          img = (require("../../../assets/Locations/Halls/8.png"));
          break;
        case "مدرج 9":
          img = (require("../../../assets/Locations/Halls/9.png"));
          break;
        case "مدرج 1-أ":
          img = (require("../../../assets/Locations/Halls/مدرج 1-أ.png"));
          break;
        case "مدرج 2-أ":
          img = (require("../../../assets/Locations/Halls/مدرج 2-أ.png"));
          break;
        case "مدرج 3-أ":
          img = (require("../../../assets/Locations/Halls/مدرج 3-أ.png"));
          break;
        case "مدرج 4-أ":
          img = (require("../../../assets/Locations/Halls/مدرج 4-أ.png"));
          break;
        case "رعاية الشباب":
          img = (require("../../../assets/Locations/Others/رعاية الشباب.png"));
          break;
        case "شؤون الطلاب":
          img = (require("../../../assets/Locations/Others/شؤون الطلاب.png"));
          break;
        case "Free lab":
          img = (require("../../../assets/Locations/Others/Free lab.png"));
          break;
        case "صالة الانشطة":
          img = (require("../../../assets/Locations/Others/صالة الانشطة.png"));
          break;
        case "مصلى طلبة":
          img = (require("../../../assets/Locations/Others/مصلى طلبة.png"));
          break;
        case "مصلى الطالبات":
          img = (require("../../../assets/Locations/Others/مصلى الطالبات.png"));
          break;
        case "المكتبة":
          img = (require("../../../assets/Locations/Others/المكتبة.png"));
          break;
        case "ICPC Room":
          img = (require("../../../assets/Locations/Others/ICPC Room.png"));
          break;
        default:
          img = (require("../../../assets/Locations/404.jpg"));
      }
    return(
        <View style={styles.imageContainer}>
              <Image source={img} style={styles.image} resizeMode="contain" />
        </View>
    );
}
export default PlaceImage;

const styles = StyleSheet.create({
    imageContainer: {
      width: 550, 
      height: '100%',
      alignItems: 'center',
    },
    image: {
        marginRight: 200,
      width: '100%',
      height: '100%',
      resizeMode: 'contain', 
      transform: [{ rotate: '90deg' }],
      alignItems: 'center',
    },
    noImage: {
      fontSize: 18,
      color: '#999',
    },
  });
  