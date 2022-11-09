import css from '../feedback/feedback.module.css';
import React, { Component } from 'react';

export class Feedback extends Component {
  static defaultProps = {
    good: 0,
    netural: 0,
    bad: 0,
    total: 0,
  };

  state = {
    good: this.props.good,
    netural: this.props.netural,
    bad: this.props.bad,
    total: this.props.total,
  };

  goodHendler = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.totalHendler();
  };

  neturalHendler = () => {
    this.setState(prevState => ({
      netural: prevState.netural + 1,
    }));
    this.totalHendler();
  };

  badHendler = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.totalHendler();
  };

  totalHendler = () => {
    this.setState(prevState => ({
      total: (prevState.total =
        prevState.netural + prevState.good + prevState.bad),
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>Please leave feedback</h2>
        <h3>Statistics</h3>
        <ul className={css.list}>
          <li>
            <button onClick={this.goodHendler} className={css.button}>
              Good
            </button>
          </li>
          <li>
            <button onClick={this.neturalHendler} className={css.button}>
              Neutral
            </button>
          </li>
          <li>
            <button onClick={this.badHendler} className={css.button}>
              Bad
            </button>
          </li>
        </ul>
        <ul className={css.list__text}>
          <li className={css.list__text__item}>
            <p>Good:{this.state.good}</p>
          </li>
          <li className={css.list__text__item}>
            <p>Neutral:{this.state.netural}</p>
          </li>
          <li className={css.list__text__item}>
            <p>Bad:{this.state.bad}</p>
          </li>
          <li className={css.list__text__item}>
            <p>Total:{this.state.total}</p>
          </li>
        </ul>
      </div>
    );
  }
}
