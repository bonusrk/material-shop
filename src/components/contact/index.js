import React from 'react';
import { connect } from 'react-redux';
import InputComponent from '../input';
import {
    fetchClothesById,
} from '../../actions/index';

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

    componentDidMount() {
        this.props.fetchClothesById(this.props.params.id)
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

    renderItem() {
        const {clothe} = this.props

        return (
            <div className="cart">
                <div className="cart__item z-depth-1">
                        <div className="cart__img"><img src={`../${clothe.image}`}/></div>
                    <div className="cart__info">
                        <span className="product__name">{clothe.name}</span>
                        <span className="product__disc">{clothe.description}</span>

                        <span className="product__price">${clothe.price}</span>
                        {/*<span className="product__price">{clothe.currentColor.id}</span>*/}
                    </div>
                </div>
            </div>
        )
    }


    render() {
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
                    {this.props.params.id && this.renderItem()}
                </div>

                <div className="block-bottom">
                    <a className="waves-effect waves-light btn">send</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    clothe: state.clothesById,
})

const mapDispatchToProps = {
    fetchClothesById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)

