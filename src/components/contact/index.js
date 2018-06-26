import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

import InputComponent from '../input';
import BasketItem from './basketItem';

import {
    getBasketClothesWithCount
} from '../../selectors';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        clothe: PropTypes.object.isRequired,
        basket: PropTypes.array.isRequired
    }


    handleChangeName(event) {
        this.setState({firstName: event.target.value});
    }

    handleChangeLastName(event) {
        this.setState({lastName: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }




    render() {
        const basket = this.props.basket || []
        return (
            <div className="main-block">
                <div className="content">
                    <div className="row">
                        <form className="col s12">
                            <InputComponent
                                id={'first_name'}
                                type={'text'}
                                label={'First Name'}
                                value={this.state.firstName}
                                validate={this.handleChangeName}


                            />
                            <InputComponent
                                id={'last_name'}
                                type={'text'}
                                label={'Last Name'}
                                value={this.state.lastName}
                                validate={this.handleChangeLastName}


                            />
                            <InputComponent
                                id={'email'}
                                type={'email'}
                                label={'Email'}
                                value={this.state.email}
                                validate={this.handleChangeEmail}


                            />
                            <InputComponent
                                id={'phone'}
                                type={'tel'}
                                label={'Phone'}
                                value={this.state.phone}
                                validate={this.handleChangePhone}


                            />
                        </form>
                    </div>
                    {this.props.params.id ? <BasketItem clothe={this.props.clothe}/> : basket.map((clothe, index) => <BasketItem key={index} clothe={clothe}/>)}
                </div>

                <div className="block-bottom">
                    {this.props.params.id ? null : <Link to={'/basket'} className="btn-mg waves-effect waves-light btn">return to basket</Link>}
                    <a className="waves-effect waves-light btn">send</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    clothe: state.clothesById.data,
    basket: getBasketClothesWithCount(state)
})


export default connect(mapStateToProps)(Contact)

