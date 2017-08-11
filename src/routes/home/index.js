/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Piaggio Fast Forward, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';

async function action() {
  return {
    chunks: ['home'],
    title: 'Piaggio Fast Forward - Gita Maze',
    component: (
      <Layout>
        <Page />
      </Layout>
    ),
  };
}

export default action;
