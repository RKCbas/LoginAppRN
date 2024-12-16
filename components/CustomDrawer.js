import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {/* Encabezado del Drawer */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://placekitten.com/100/100' }} // Imagen de perfil temporal
            style={styles.profileImage}
          />
          <Text style={styles.username}>User Name</Text>
        </View>

        {/* Lista de elementos predeterminados del Drawer */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Botón de Logout en la parte inferior */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => props.navigation.replace('Login')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    margin: 20,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
