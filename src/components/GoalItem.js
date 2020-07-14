import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const GoalItem = ({goal, onDeleteGoal}) => {
  const deleteGoal = (id) => {
    onDeleteGoal(id);
  };

  return (
    <TouchableOpacity onPress={() => deleteGoal(goal.id)}>
      <View style={styles.box}>
        <Text>{goal.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

GoalItem.propTypes = {
  goal: PropTypes.object.isRequired,
  onDeleteGoal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    borderStyle: 'dotted',
  },
});

export default GoalItem;
