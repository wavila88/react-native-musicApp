import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 200,
        borderBottomRightRadius: 50,
        
    },
    titleContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon:{
        height:30,
        width:30,
        opacity: 0.5,
        marginHorizontal: 6,
        marginTop: 4
    },
    titleIcon: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2caeca'
    },
    moodImage:{
        margin: 8,
        width:150,
        height: 150,
        borderRadius: 20
    },
    topAlmunsImg:{
       margin: 5,
       borderRadius: 50,
       width: '98%'
    },
    browseAllContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    browseImage: {
        borderRadius: 5,
        margin:5,
        width: '43%',
        height: 150
    }
});