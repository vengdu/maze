/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Piaggio Fast Forward, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Maze from './Maze';

function action() {
  return {
    title: 'Play The Maze',
    component: <Maze />,
  };
}

export default action;
