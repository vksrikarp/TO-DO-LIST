import React, { useState } from "react";
import { Button, Modal, Text } from "react-native";

const ToDoDetail = ({
    indexofRecord,
    id,
    dataArray,
    dataObject,
    userId,
    saveDataFunction,
    mode,
    modeChanger
}) => {
    console.log(dataArray[indexofRecord],indexofRecord,dataObject)
    const [openModal,setOpenModal] = useState(mode == 'detail' ? true : false)
    const onCloseHandler=()=>{
        setOpenModal(false)
        saveDataFunction()
    }
    return (
        <Modal
        key={id ? id : indexofRecord}
        visible={openModal}
        animationType="slide"
        onRequestClose={()=>setOpenModal(false)}
        >
            <Button title="Close" onPress={()=>onCloseHandler()}></Button>
            <Text>{dataObject?.name}</Text>

        </Modal>
);
};

export default ToDoDetail;
