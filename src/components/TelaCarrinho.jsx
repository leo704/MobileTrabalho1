import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import styles from './Styles'
import { ContextoCarrinho } from '../contexto/CarrinhoContext';


export default function TelaCarrinho(props) {

  const [itensCarrinho] = useContext(ContextoCarrinho);

  return (
    <View style={styles.todasTelas}>
      <Text>Itens no Carrinho:</Text>
      <FlatList
        data={itensCarrinho}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Preço: R$ {item.price}</Text>
          </View>
        )}
      />
    </View>
  )
}