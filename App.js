import React from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableHighlight } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c', url: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'EMERALD', code: '#2ecc71' , url: 'https://images.pexels.com/photos/4226171/pexels-photo-4226171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'PETER RIVER', code: '#3498db' , url: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    { name: 'AMETHYST', code: '#9b59b6' , url: 'https://images.pexels.com/photos/1739811/pexels-photo-1739811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'WET ASPHALT', code: '#34495e' , url: 'https://images.pexels.com/photos/5109666/pexels-photo-5109666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'GREEN SEA', code: '#16a085' , url: 'https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'NEPHRITIS', code: '#27ae60' , url: 'https://images.pexels.com/photos/4558717/pexels-photo-4558717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'BELIZE HOLE', code: '#2980b9' , url: 'https://images.pexels.com/photos/3418400/pexels-photo-3418400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'WISTERIA', code: '#8e44ad' , url: 'https://images.pexels.com/photos/5815/flowers-purple-garden-plant.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'MIDNIGHT BLUE', code: '#2c3e50', url: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'SUN FLOWER', code: '#f1c40f' , url: 'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'CARROT', code: '#e67e22', url: 'https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'ALIZARIN', code: '#e74c3c', url: 'https://images.pexels.com/photos/1602842/pexels-photo-1602842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'CLOUDS', code: '#ecf0f1' , url: 'https://images.pexels.com/photos/8348193/pexels-photo-8348193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'CONCRETE', code: '#95a5a6', url: 'https://images.pexels.com/photos/1684906/pexels-photo-1684906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'ORANGE', code: '#f39c12' , url: 'https://images.pexels.com/photos/824572/pexels-photo-824572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'PUMPKIN', code: '#d35400', url: 'https://images.pexels.com/photos/695207/pexels-photo-695207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { name: 'POMEGRANATE', code: '#c0392b' , url: 'https://images.pexels.com/photos/4195583/pexels-photo-4195583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'SILVER', code: '#bdc3c7' , url: 'https://images.pexels.com/photos/6402532/pexels-photo-6402532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    { name: 'ASBESTOS', code: '#7f8c8d', url: 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  ]);

  function createButtonAlert(msg, title) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  return (
    <SectionGrid
      itemDimension = { 90 }
      sections = {[
        {
          title: 'Paleta de colores 1',
          data: items.slice(0, 6),
        },
        {
          title: 'Paleta de colores 2',
          data: items.slice(6, 12),
        },
        {
          title: 'Paleta de colores 3',
          data: items.slice(12, 20),
        },
      ]}
      style = { styles.gridView }
      renderItem = { ({ item, section, index }) => (
        <TouchableHighlight
            activeOpacity = {0.6}
            underlayColor = "#DDDDDD"
            onPress = { () => createButtonAlert(item.name,section.title) }
        >
            <View style = { [styles.itemContainer, { backgroundColor: `${item.code}` }] }>
            <Image 
                style = { styles.image }
                source = {{ uri: item.url }}
            />
            <Text style = { styles.itemName }>{ item.name }</Text>
            <Text style = { styles.itemCode }>{ item.code }</Text>

            
            </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style = { styles.sectionHeader }>{ section.title  } </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 5,
        height: 150,
    },
    itemName: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 10,
    },
    image: {
        zIndex: -1,
        position: 'absolute',
        width: '100%', 
        height: '100%',
        opacity: 0.5,
    },
});