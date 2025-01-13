import { StyleSheet, } from 'react-native';

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
        backgroundColor:'orange',
        height:150,
        width:'90%',
        padding:20,
        fontSize:25,
        borderRadius:50,
        borderWidth:1
    },
    detailRecord:{
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'skyblue'
    },
});

export { commonStyles };

