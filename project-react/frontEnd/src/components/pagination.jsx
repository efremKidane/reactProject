import React, { Component } from 'react';
import _ from 'lodash';


class Pagination extends Component {
    state = {}


    render() {
        const { itemCount, pageSize, currentPage, onPageChange } = this.props;

        const pageCount = Math.ceil(itemCount / pageSize);
        if (pageCount === 1) return null
        const pages = _.range(1, pageCount + 1);
        return (
            <nav>
                <ul className="pagination">
                    {pages.map(item =>
                        <li key={item}
                         className={item === currentPage ? 'page-item active' : 'page-item'}
                            >
                            <a className="page-link" onClick={() => onPageChange(item)}>
                                {item}
                            </a></li>
                    )}

                </ul>
            </nav>
        );
    }
}

export default Pagination;