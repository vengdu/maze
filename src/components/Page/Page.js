/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Piaggio Fast Forward, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import overviewUrl from './maze-overview.png';
import wireframeUrl from '../../../docs/designs/wireframes/1920_wireframe.pdf';
import s from './Page.css';

class Page extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Gita Maze</h1>
            <p className={s.bannerDesc}>
              Help Gita find his Goals by following these rules:
            </p>
            <ol>
              <li>
                Review the included <a href={wireframeUrl}>wireframe</a> to get
                colors, styles, and other design considerations.
              </li>

              <li>
                Review the README.md file in this repo for more detailed
                instructions on game design.
              </li>

              <li>
                Integrate{' '}
                <a href="https://www.npmjs.com/package/generate-maze">
                  https://www.npmjs.com/package/generate-maze
                </a>{' '}
                for maze generation.
              </li>

              <li>
                Create a view to represent the generated maze layout in
                appropriate colors and shapes.
              </li>

              <li>
                Integrate{' '}
                <a href="https://dmauro.github.io/Keypress/">keypress.js</a> if
                you use keyboard input
              </li>
            </ol>
          </div>
        </div>
        <div>
          <img src={overviewUrl} width="100%" alt="React" />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Page);
