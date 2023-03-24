import { StyleSheet } from 'react-native';

const purple =  '#8284FA'
const purpleDark = '#5E60CE'
const blue = '#4EA8DE'
const blueDark = '#1E6F9F'
const gray100 = '#F2F2F2'
const gray200 = '#D9D9D9'
const gray300 = '#808080'
const gray400 = '#333333'
const gray500 = '#262626'
const gray600 = '#1A1A1A'
const gray700 = '#0D0D0D'
const danger = '#E25858'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: gray600,
      fontFamily: 'Inter_400Regular',
      paddingHorizontal: 24,
    },
    containerBackGroundHalfColor: {
      width: '100%',
      backgroundColor: gray700,
      padding: 70,
      paddingHorizontal: 0
    },
    logoImage: {
      width: 110.34,
      height: 32,
      alignSelf:'center',
      marginBottom: 40
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: -25,
    },
    inputText: {
      width: '85%',
      height: 52,
      backgroundColor: gray500,
      borderRadius: 6,
      borderWidth: 1,
      padding: 16,
      color: gray100,
      fontSize: 16,
      marginRight: 4
    },
    buttonAdd: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: blueDark,
      height: 52,
      width: 52,
      borderRadius: 6
    },
    buttonRemove: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: '100%',
    },
    removeIcon: {
      width: 12,
      height: 14,
    },
    counterConteiner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 33
    },
    containerCreated: {
      flexDirection: 'row',
    },
    containerDone: {
      flexDirection: 'row'
    },
    counterCreatedText: {
      fontFamily: 'Inter_700Bold',
      fontSize: 14,
      color: blue,
      marginRight: 8
    },
    counterCreatedValue: {
      fontSize: 12,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: gray400,
      fontFamily: 'Inter_700Bold',
      width: 25,
      height: 19,
      borderRadius: 999,
      color: '#FFFFFF'
    },
    counterDoneText: {
      fontFamily: 'Inter_700Bold',
      fontSize: 14,
      color: purple,
      marginRight: 8
    },
    counterDoneValue: {
      fontSize: 12,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: gray400,
      fontFamily: 'Inter_700Bold',
      width: 25,
      height: 19,
      borderRadius: 999,
      color: '#FFFFFF'
    },
    emptyTasksContainer: {
      marginTop: 20,
      height: 207,
      alignSelf: 'center',
      justifyContent: 'center',
      borderTopColor: gray400,
      borderTopWidth: 1,
      width: '100%'
    },
    emptyTasksImage: {
      width: 56,
      height: 56,
      alignSelf: 'center',
      marginBottom: 16,
    },
    upperTextEmptyTasks: {
      fontSize: 14,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'Inter_700Bold',
      color: gray300
    },
    lowerTextEmptyTasks: {
      fontSize: 14,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'Inter_400Regular',
      color: gray300
    },
    taskContainer: {
      flexDirection: 'row',
      paddingHorizontal: 15,
      marginTop: 20,
      height: 64,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: gray400,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: gray500,
    },
    checkbox: {
      borderRadius: 10,
      width: 18,
      height: 18,
    },
    taskTextChecked: {
      color: gray300,
      width: 235,
      textDecorationLine: 'line-through'
    },
    taskTextUnchecked: {
      color: gray100,
      width: 235
    }
  });
  