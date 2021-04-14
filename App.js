import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import MapView, { Marker } from 'react-native-maps'
import Pin from "./src/Pin/index"

/* latitude: -23.5492243,
longitude: -46.5813785,

latitudeDelta: 0.0922,
longitudeDelta: 0.04,

Latitude: -15.7797200

Longitude: -47.9297200


Latitude: -23.413, 

Longitude: -46.4445


  */


export default function App() {
  const [change, setChange] = useState(null)

  const [select, setSelect] = useState([
    { key: "0", text: 'Area livre', color: "#121", cords: { latitude: -23.5492243, longitude: -46.5813785 } },
    { key: "1", text: 'Area perigo', color: "#f23", cords: { latitude: -23.492243, longitude: -46.4581 } }
  ])




  return (
    <SafeAreaView style={styles.container} >


      <MapView
        style={styles.map}
        region={change}

      >
        {
          select.map((item) => {
            return (
              //key não e  prop,este componente precisa de key individual
              //boa pratica e so enviar apenas as props ,então desconstruir cada prop.  
              <Marker key={item.key} coordinate={item.cords} >

                <Pin color={item.color} aviso={item.text} />

              </Marker>

            )
          })

        }


      </MapView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,

  },


});

