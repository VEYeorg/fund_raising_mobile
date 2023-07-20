import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {imagesitem13x} from '../assets/images';
import CustomProgressBar from './atom/CustomProgressBar';
import TextComponent from './atom/CustomText';
import {Color, boxShadow} from '../assets/GlobalStyles';

const ItemDonation = () => {
  return (
    <TouchableOpacity style={[styles.container, boxShadow]} onPress={() => {}}>
      <View style={styles.imagesView}>
        <Image source={imagesitem13x} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.contentText}>
        <TextComponent numberOfLines={2} style={styles.description}>
          Some description about the project Some description about theSome
          description about the project Some description about the project
        </TextComponent>
        <CustomProgressBar value={65} />
        <View style={styles.contentTextPrice}>
          <TextComponent style={styles.goalText}>HTG 100.00</TextComponent>
          <TextComponent fontSize={15} color={Color.black} fontWeight="normal">
            @jUlio
          </TextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    height: 265,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 26,
  },
  imagesView: {
    height: 160,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentText: {
    margin: 8,
  },
  description: {
    fontSize: 15,
    color: '#333',
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 18,
    marginTop: 8,
    height: 10,
  },
  progressBar: {
    backgroundColor: 'green',
    borderRadius: 18,
    justifyContent: 'center',
  },
  goalText: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 8,
  },
  contentTextPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ItemDonation;
