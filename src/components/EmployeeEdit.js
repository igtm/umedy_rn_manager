import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount(){
        const { employee, employeeUpdate } = this.props;
        console.log('employee', employee);
        Object.keys(employee).forEach(prop => {
            employeeUpdate({ prop, value: employee[prop]});
        });
    }

    onButtonPress(){
        const { name, phone, shift, employee } = this.props;
        console.log(name, phone, shift, employee.uid);

        this.props.employeeSave({ name, phone, shift, uid: employee.uid });
    }

    render(){
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => this.setState({showModal: !this.state.showModal})}
                    onDecline={() => this.setState({showModal: !this.state.showModal})}
                >
                    Are you sure you want to delete this ?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return { name, phone, shift } = state.employeeForm;
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);