// TRY LIST AND GRID VIEW

import React, { useEffect, useState } from 'react'
import { Button, Pressable, Text, View } from 'react-native'
import { commonStyles } from '../Common/Styles/CommonStyleSheet'

const ToDoCard = ({
    indexofRecord,
    id,
    cardObject,
    completeArray,
    userId,
    saveDataFunction,
    getRecordById,
    mode,
    modeChanger,
    onDeleteToDoRecord
}) => {
console.log(id,"idd")
    const [todoItem,setToDoItem] = useState({})

    useEffect(()=>{
        setToDoItem(cardObject)
    },[])

  return (
    <Pressable key={indexofRecord} onPress={()=>getRecordById(id)}>
    <View style={commonStyles.card}>
      <Text>{todoItem.name}</Text>
    </View>
    <Button onPress={()=>onDeleteToDoRecord(id)} title='DELETE'></Button>
    </Pressable>
  )
}

export default ToDoCard