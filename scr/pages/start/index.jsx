import React from "react";


export default function Start (){

  return(
      <View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Image source={require("../../assets/icons/logo3.png")} />
        <Text>
          Vamos transformar sua vida {"/n"} em jogo, buscando sempre o melhor nível
          </Text>
      </View>

      </ScrollView>
      </View>
  )
}


