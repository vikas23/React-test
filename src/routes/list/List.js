/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

class Home extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      document_thumbnail_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      abstract: PropTypes.string,
    })).isRequired,
  };

  render() {
    const listItems = this.props.items.map(item => (
      <li key={item.doc_seq_id}>
        <img src={item.document_thumbnail_url} alt="No Logo" />
        <div>title: {item.title}</div>
        <div>desc: {item.description}</div>
        <div>abs: {item.abstract}</div>
      </li>
      ));

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default (Home);
