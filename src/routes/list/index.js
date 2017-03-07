/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import List from './List';
import Layout from '../../components/Layout';

export default {

  path: '/',

  action() {
    const data = [];
    return {
      title: 'React Starter Kit',
      component: <Layout><List items={data} /></Layout>,
    };
  },

};
