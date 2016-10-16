import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
      type: EMPLOYEE_UPDATE,
      payload: { prop, value }
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
    console.log({ name, phone, shift });

    return (dispatch) => {
        setTimeout(function () {
            dispatch({ type: EMPLOYEE_CREATE });
           Actions.employeeList({ type: 'reset' }); // 戻る
        }, 1000);
    }
};

export const employeesFetch = () => {
    return (dispatch) => {
        setTimeout(function () {
            const testData = [
                {name: 'ssssss',phone:'345-567-890',shift:'Monday'},
                {name: 'aaaaaa',phone:'345-567-890',shift:'Monday'},
                {name: 'ffffff',phone:'345-567-890',shift:'Monday'},
                {name: 'dddddd',phone:'345-567-890',shift:'Monday'}
            ];
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS , payload: testData });
        }, 300);
    }
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    return (dispatch) => {
        setTimeout(function () {
            console.log('employee saved!!!');
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
            Actions.employeeList({ type: 'reset' })
        },300);
    }
};