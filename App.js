import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';

// Components
import AddGoal from './src/components/AddGoal';
import GoalItem from './src/components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'A',
    },
  ]);

  const addNewGoal = (goal) => {
    const newGoal = {
      id: goals.length + 1,
      title: goal,
    };

    setGoals([newGoal, ...goals]);
  };

  const deleteGoal = (id) => {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AddGoal onAddNewGoal={addNewGoal} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={goals}
          renderItem={({item}) => (
            <GoalItem key={item.id} goal={item} onDeleteGoal={deleteGoal} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});

export default App;
