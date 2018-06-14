import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import R from 'ramda';
import {
    fetchCategories,
    fetchClothes
} from '../../actions/index';

import CategoryItem from './categoryItem';


class CategoryList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }
     static propTypes  = {
         categories : PropTypes.object.isRequired,
         category : PropTypes.string.isRequired,
         fetchCategories: PropTypes.func.isRequired,
         fetchClothes: PropTypes.func.isRequired
     }
    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchClothes()
        this.setState({
            loading:false
        })
    }
    


    render() {
        if (this.state.loading) return null
        const categories =
            R.filter((category) =>
                category.gender === this.props.category, this.props.categories);

        const data = Object.values(categories);
        return (
                <div id={this.props.category} className="col s12">
                    <div className="list">
                        {data.map((category, index) => <CategoryItem key={index} category={category} />)}
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories,
})

const mapDispatchToProps = {
    fetchCategories,
    fetchClothes
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
