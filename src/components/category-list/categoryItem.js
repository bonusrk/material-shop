import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const CategoryItem = ({
                          category
                      }) => {
    return (
        <Link to={`/category/${category.id}`}
              className="waves-effect z-depth-1 list__item">
            <span className="list__name">{category.name}</span>
            <div className="list__img"><img src={category.image} alt=""/></div>
        </Link>
    )
}

export default CategoryItem


CategoryItem.propTypes = {
    category: PropTypes.object.isRequired
}
