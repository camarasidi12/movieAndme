// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmDetail2 extends React.Component {
    
    render() {
	const dispDetailFil =this.prop
    return (
      <View style={styles.main_container}>
        <Text>Détail 22 du film  {this.props.navigation.state.params.idFilm }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default FilmDetail2
