import React, { useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { commonStyles } from '../Styles/CommonStyleSheet'
// {
//     "id": 2,
//     "name": "Project Beta",
//     "description": "A detailed description of Project Beta.",
//     "deadLineDate": "2025-02-20",
//     "startDate": "2025-01-15",
//     "photo": "",
//     "file": [
//       // {
//       //   "fileName": "requirements.docx",
//       //   "fileUrl": "https://example.com/requirements-beta.docx"
//       // },
//       // {
//       //   "fileName": "roadmap.xlsx",
//       //   "fileUrl": "https://example.com/roadmap-beta.xlsx"
//       // }
//     ]
//   },
const CrudHoc = (
    CardComponent,
    DetailComponent,
    userId,
    initialData
) => {

    console.log(userId,initialData)
    const [dataArray,setDataArray] = useState(initialData)
    const [dataObject,setDataObject] = useState({})
    const [indice,setIndice] = useState(0)
    const [mode,setMode] = useState("list") //list,detail,grid
    const [selectedRecordId,setSelectedRecordId] = useState(null)

    // useEffect(()=>{
    //     setDataArray(initialData)
    // },[initialData])

    const saveDataFunction = () => {  //try to have a common save data functionality in hoc.
        setMode('list')
    }

    const onAddToDoRecord = ()=>{
        setDataArray((previousRecord)=>
            [...previousRecord,
                {
                        id: "",
                        name: "",
                        description: "",
                        deadLineDate: "",
                        startDate: "",
                        photo: "",
                        file: [
                          {
                            fileName: "",
                            fileUrl: ""
                          },
                          {
                            fileName: "",
                            fileUrl: ""
                          }
                        ]
                      
                }
            ]
        )
    }
    const onDeleteToDoRecord = (requestId,requestIndex)=>{
        alert(requestId)
        setDataArray(dataArray.filter(e => e.id !== requestId))
    }

    const getRecordById = (requestId,index) => {
        // setStatusBarNetworkActivityIndicatorVisible
        console.log(index)
        setIndice(index)
        if(dataArray){
            setDataObject(
                dataArray.find((d)=>d.id === requestId) //index based for new record
            )
            if(dataObject){
                setSelectedRecordId(dataObject.id)
                
            }
        }
        setMode('detail')
    }

    const renderCardItem = ({ item, index }) => (
        <CardComponent
            key={item.id ? item.id : index}
            indexofRecord={index}
            id={item.id}
            cardObject={item}
            completeArray={dataArray}
            userId={userId}
            saveDataFunction={saveDataFunction}
            getRecordById={()=>getRecordById(item.id,index)}
            mode={mode}
            modeChanger={setMode}
            onDeleteToDoRecord={onDeleteToDoRecord}
        />
    );


return (
    <ScrollView style={{margin:'1%'}}>
                    <Button
                    onPress={onAddToDoRecord}
                    title="Add New Item">
                    </Button>
        {
            mode==="list" || mode=== "grid" ?
        <View style={localStyles.cardContainer
            // mode === "list" ? localStyles.listCardContainer :
            // mode === "grid" ? localStyles.gridCardContainer : localStyles.listCardContainer
            
        }>
            <FlatList
                    data={dataArray}
                    renderItem={renderCardItem}
                    keyExtractor={(item, index) => item.id?.toString() ? item.id?.toString() : index.toString()}
                    numColumns={mode === "grid" ? 2 : 1} // Display in grid or list format
                    contentContainerStyle={localStyles.cardContainer}
                    // ListFooterComponent={
                    //     dataArray.length % 2 !== 0 ? <View style={commonStyles.card} /> : null
                    // }
                />
            {/* {dataArray.length % 2 !== 0 && ( // Check if last card needs padding
        <View style={commonStyles.card} />
    )} */}
        </View>
        :
        mode === "detail" &&
        <View style={commonStyles.detailRecord}>
            <DetailComponent
                key={indice}
                indexofRecord={indice}
                id={item.id}
                dataArray={dataArray}
                dataObject={dataObject}
                userId={userId}
                saveDataFunction={saveDataFunction}
                mode={mode} //set to Detail
                modeChanger={setMode}

            />
        </View>
    }
    </ScrollView>
    )
}

const localStyles = StyleSheet.create({

    cardContainer: {
        width: '98%', // Adjust width for two cards per row
        margin: '1%',
        height:'100%',
        backgroundColor: 'gray',
        // flex:2,
        // flexDirection: 'row',
    },

    gridCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    card: {
        width: '30%', // Adjust width based on desired card size and spacing
        backgroundColor: '#000',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },

    emptyCard: {
      flexBasis: '48%', // Match card width for spacing
    
    },
});

export default CrudHoc
