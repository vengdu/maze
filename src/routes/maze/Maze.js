/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Piaggio Fast Forward, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Maze.css';

class Maze extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: null,
  };

  render() {
    if (__DEV__ && this.props.error) {
      return (
        <div>
          <h1>
            {this.props.error.name}
          </h1>
          <pre>
            {this.props.error.stack}
          </pre>
        </div>
      );
    }

    return (
      <div>
        <h1>Maze...</h1>
        <p>There seems to be something missing here...</p>
      </div>
    );
  }
}

export { Maze as MazeWithoutStyle };
export default withStyles(s)(Maze);
