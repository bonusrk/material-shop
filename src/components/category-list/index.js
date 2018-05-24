import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';
import {
    fetchCategories,
    fetchClothes
} from '../../actions/index';


class CategoryList extends React.Component {


    /* static propTypes  = {
         category : PropTypes.string.isRequired
     }
*/
    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchClothes()
    }

    renderCategories(category, index) {
        return (
                <Link to={`category/${category.id}`}  key={index}
                      className="waves-effect z-depth-1 list__item">
                    <span className="list__name">{category.name}</span>
                    <div className="list__img"><img src={category.image} alt=""/></div>
                </Link>
        )
    }


    render() {
        const categories =
            R.filter((category) =>
                category.gender === this.props.category, this.props.categories);

        const data = Object.values(categories);
        return (
                <div id={this.props.category} className="col s12">
                    <div className="list">
                        {data.map((category, index) => this.renderCategories(category, index))}
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
