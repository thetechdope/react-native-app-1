import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader';
import LinearGradient from 'react-native-linear-gradient';
import Buttoncomponent from '../../components/butoncomponents';
import {ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';
import style from './style';
import {Routes} from '../../navigation/Routes';
import {Logopath} from '../../assets/images';
import styles from '../settings/styles';
import {verticalScale,horizontalScale} from '../../components/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons';

const GiveFeedback = ({navigation, route: {params}}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(params?.item);
  }, []);
  return (
    <CustomHeader>
      <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} style={style.icons} />
      </TouchableOpacity>
        {data && data?.businessImage ? 
        <Image style={style.BannerImage} source={{uri:data?.businessImage}} />:
        <Image style={style.BannerImage} source={Logopath.Person} />
        }
        <View style={styles.formate}>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              lineHeight: 24,
              marginLeft: '5%',
              fontFamily: ROBOTO_MEDIUM,
            }}>
            {data?.businessName}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
              lineHeight: 17,
              marginTop: 5,
              marginLeft: '5%',
              fontFamily: ROBOTO_REGULAR,
            }}>
            {data?.businessEmail}
          </Text>
        </View>

        <LinearGradient
          style={{
            height: verticalScale(75),
            width: '95%',
            alignSelf: 'flex-end',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '6%',
          }}
          colors={['#7E50EE', '#6833E9']}>
          <View
            style={{justifyContent: 'center', marginLeft: '8%', width: '70%'}}>
            <Text style={{color: '#FFFFFF', fontSize: 18, lineHeight: 20}}>
              Previous Rating:
            </Text>
            <Text style={{color: '#E6DCFF', fontSize: 13, lineHeight: 15}}>
              21-11-2022
            </Text>
          </View>
          {data?.rating == 0 ? (
            <Image
              source={Logopath.Redemoji}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: '#ffffff',
              }}
            />
          ) : data?.rating == 1 ? (
            <Image
              source={Logopath.Yellowemoji}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: '#ffffff',
              }}
            />
          ) : (
            <Image
              source={Logopath.Greenemoji}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: '#ffffff',
              }}
            />
          )}
        </LinearGradient>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '8%',
            marginLeft: '8%',
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#7E50EE1A',
              marginRight: '4%',
            }}
            source={Logopath.location}
          />
          <Text style={{fontSize: 14, color: '#797979'}}>
            227 40th sSt, New York, NY 10018, USA
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 0.3,
            borderColor: '#797979',
            marginVertical: '4%',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '8%',
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#7E50EE1A',
              marginRight: '4%',
            }}
            source={Logopath.contact}
          />
          <Text style={{fontSize: 14, color: '#797979'}}>+1 212-933-8373</Text>
        </View>
        <View
          style={{
            borderTopWidth: 0.3,
            borderColor: '#797979',
            marginVertical: '4%',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '8%',
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#7E50EE1A',
              marginRight: '4%',
            }}
            source={Logopath.email}
          />
          <Text style={{fontSize: 14, color: '#797979'}}>
            {data?.businessEmail}
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 0.3,
            borderColor: '#797979',
            marginVertical: '4%',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '8%',
            marginBottom: '6%',
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#7E50EE1A',
              marginRight: '4%',
            }}
            source={Logopath.globe}
          />
          <Text style={{fontSize: 14, color: '#797979'}}>
            www.mcdonalds.com/
          </Text>
        </View>

        <Buttoncomponent
          value={'ADD FEEDBACK'}
          onPress={() => navigation.navigate(Routes.Addfeedback, {item: data})}
        />
      </ScrollView>
    </CustomHeader>
  );
};

export default GiveFeedback;
