import * as React from 'react';

import { Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import Logo from './assets/Logo.png';
import Plus from './assets/plus.png';
import Clipboard from './assets/Clipboard.png';
import Trash from './assets/trash.png';

interface Task {
  id: number
  taskText: string
  done: boolean
}

export default function TodoList() {
  const [createdCounter, setCreatedCounter] = useState(0)
  const [doneCounter, setDoneCounter] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState<string>('')


  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });
  
  if(!fontsLoaded){
    return null;
  }

  const handlePressTask = (taskPressed: Task) => {
    if(!taskPressed){
      return
    }

    setTasks(tasks.map(task => {
      if(taskPressed.id === task.id){
        task.done = !taskPressed.done
      }
      return task
    }))

    if(taskPressed.done){
      setDoneCounter(prevState => prevState + 1)
    }else{
      setDoneCounter(prevState => {
        if(prevState === 0){
          return 0
        } 
        return prevState - 1
      })
    }
  }

  const handleCreateTask = () => {
    if(!taskText){
      return
    }
    setCreatedCounter(prevState => prevState + 1)
    setTasks(prevState => [...prevState, {id: new Date().getTime(), taskText, done: false}])   
    setTaskText('') 
  }

  const handleRemoveTask = (taskToRemove: Task) => {
    if(!taskToRemove){
      return
    }

    setTasks(tasks.filter(task => task.id !== taskToRemove.id))
    setCreatedCounter(prevState => {
      if(prevState === 0){
        return 0
      } 
      return prevState - 1
    })
    setDoneCounter(prevState => {
      if(prevState === 0){
        return 0
      } 
      return prevState - 1
    })
  } 

  const showWhenNoTaks = () => (
    <View style={styles.emptyTasksContainer}>
      <Image style={styles.emptyTasksImage} source={Clipboard} />
      <Text style={styles.upperTextEmptyTasks}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.lowerTextEmptyTasks}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )

  return (
    <>
    <View style={styles.containerBackGroundHalfColor}>
      <Image style={styles.logoImage} source={Logo} />
    </View>
    <View style={styles.container}>  
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder={'Adicione uma nova tarefa'} placeholderTextColor={'#808080'} onChangeText={text => setTaskText(text)} value={taskText}/>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleCreateTask} >
          <Image  source={Plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.counterConteiner}>
        <View style={styles.containerCreated}>
          <Text style={styles.counterCreatedText}>Criadas</Text>
          <Text style={styles.counterCreatedValue}>{createdCounter}</Text>
        </View>
        <View style={styles.containerDone}>
          <Text style={styles.counterDoneText}>Concluídas</Text>
          <Text style={styles.counterDoneValue}>{doneCounter}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={({item}) => 
          <View style={styles.taskContainer}>
            <CheckBox style={styles.checkbox} color={item.done ? '#5E60CE' : '#4EA8DE'} value={item.done}
            onValueChange={() => handlePressTask(item)} />
            <Text style={item.done ? styles.taskTextChecked : styles.taskTextUnchecked}>{item.taskText}</Text>
            <TouchableOpacity style={styles.buttonRemove} onPress={() => handleRemoveTask(item)} >
              <Image style={styles.removeIcon} source={Trash} />
            </TouchableOpacity>
          </View>
        }
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={() => showWhenNoTaks()}
      />
    </View>
    </>
  );
}