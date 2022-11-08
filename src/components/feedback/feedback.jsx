import css from '../feedback/feedback.module.css';
import React, { Component } from 'react';

export class Feedback extends Component {
  handleIncrement =() => {
    console.log('click mouse');
  }

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>Please leave feedback</h2>
        <ul className={css.list}>
          <li>
            <button onClick={this.handleIncrement} className={css.button}>
              Good
            </button>
          </li>
          <li>
            <button className={css.button}>Neutral</button>
          </li>
          <li>
            <button className={css.button}>Bad</button>
          </li>
        </ul>
        <ul className={css.list__text}>
          <li className={css.list__text__item}>
            <p>Good:</p>
          </li>
          <li className={css.list__text__item}>
            <p>Neutral:</p>
          </li>
          <li className={css.list__text__item}>
            <p>Bad:</p>
          </li>
        </ul>
      </div>
    );
  }
}
