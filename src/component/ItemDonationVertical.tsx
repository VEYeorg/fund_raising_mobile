import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {imagesitem23x} from '../assets/images';
import TextComponent from './atom/CustomText';
import {Color} from '../assets/GlobalStyles';
import CustomProgressBar from './atom/CustomProgressBar';

// create props interface
interface ItemDonationVerticalProps {
  onPress: () => void;
}

const ItemDonationVertical: React.FC<ItemDonationVerticalProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, styles.boxShadow]}>
        <Image
          source={imagesitem23x}
          style={styles.imagesStyle}
          resizeMode="stretch"
        />
        <View style={styles.containerText}>
          <TextComponent
            numberOfLines={2}
            fontSize={15}
            color={Color.gray_100}
            fontWeight="normal">
            Lorem ipsum dolor sit amet consectetur elit. Lorem ipsum dolor sit
            amet consectetur elit. Lorem ipsum dolor sit amet consectetur elit.
          </TextComponent>
          <TextComponent fontSize={15} color={Color.black} fontWeight="bold">
            @jUlio
          </TextComponent>
          <View>
            <CustomProgressBar value={80} />
          </View>
          <View style={[styles.containerPriceDate]}>
            <TextComponent fontSize={15} color={Color.black} fontWeight="bold">
              HTG 120
            </TextComponent>
            <TextComponent fontSize={13} color={Color.black} fontWeight="bold">
              3 days left
            </TextComponent>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  imagesStyle: {
    width: 150,
    height: 120,
    borderRadius: 16,
  },
  containerText: {
    height: 124,
    paddingLeft: 8,
    width: '60%',
  },
  containerPriceDate: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 4,
  },
  boxShadow: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.65,
    elevation: 8,
  },
});

export default ItemDonationVertical;
