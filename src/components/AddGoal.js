import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const AddGoal = ({onAddNewGoal}) => {
  const [goal, setGoal] = useState('');

  const addNewGoal = (newGoal) => {
    if (!goal) {
      alert('Please fill the form');
    } else {
      onAddNewGoal(newGoal);
      setGoal('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add Goal..."
        onChangeText={(goal) => setGoal(goal)}
        value={goal}
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={() => addNewGoal(goal)}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

AddGoal.propTypes = {
  onAddNewGoal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#ccc',
    padding: 10,
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default AddGoal;
