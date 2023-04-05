import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    marginVertical: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 319,
    height: 50,
    fontSize: 14,
    fontWeight: '500',
  },
  textHeader: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: 'black',
  },
  textSub: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '900',
    color: '#666666',
  },
  textImg: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
    color: '#3F3A3A',
  },
  textImg2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
    color: 'white',
  },
  item: {
    height: 158,
    width: 260,
    marginLeft: 10,
    borderRadius: 10,
  },
  img: {
    height: 158,
    width: 260,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  img2: {
    height: 136,
    width: 260,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  img3: {
    height: 44,
    width: 260,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  img4: {
    height: 158,
    width: 260,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  img5: {
    zIndex: 1,
    marginTop: -54,
    height: 44,
    width: 260,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
  },
  thumb: {
    height: 64,
    width: 64,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});

export default styles;
