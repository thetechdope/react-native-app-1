import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import CustomHeader from '../../components/customHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Logopath} from '../../assets/images';
import {TextInput} from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/butoncomponents';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import CheckBox from '@react-native-community/checkbox';
import style from './style';

const Addfeedback = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <CustomHeader>
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => navigation.replace(Routes.GiveFeedback)}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>Give Feedback</Text>
      </View>
      <View>
        <Text style={styles.txthead}>Mcdonald's Pizza</Text>
        <Text style={styles.txt}>How did we do ?</Text>
        <View style={styles.imgdirection}>
          <Image source={Logopath.Redemoji} style={styles.imgemoji} />

          <Image source={Logopath.Yellowemoji} style={styles.imgemoji} />
          <Image source={Logopath.Greenemoji} style={styles.imgemoji} />
        </View>

        <TextInput style={styles.input} multiline={true} />
      </View>
      <View
        style={style.checkbox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          boxType={'square'}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          textvalue="Anonymous"
          style={{height: 20, width: 20, margin: 4}}
        />
        <Text style={{justifyContent: 'center', }}>Anonymous</Text>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View
            style={{justifyContent: 'center', flex: 1, alignContent: 'center'}}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/01/43/05/40/360_F_143054058_n39HtIYBeWuxnjmIUCbMrGxShtm2rNyV.jpg',
              }}
              style={styles.img}
            />
            <Text style={styles.modalText}>Thank you!</Text>
            <Text style={styles.modalTex}>
              Thank you for sharing your thughts
            </Text>
            <Text style={styles.modalTex}> we appreciet your feedback</Text>
            <Buttoncomponent
             value={'OK'}
             onPress={() => {setModalVisible(!modalVisible)
            navigation.replace(Routes.Home)
            }
             
            }
             />
          </View>
        </View>
      </Modal>
      <View style={styles.btn}>
        <Buttoncomponent
          value={'SUBMIT'}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </CustomHeader>
  );
};

export default Addfeedback;
