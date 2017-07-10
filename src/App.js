import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import './App.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
  },

  box: {
    padding: 3,
    border: '1px solid black',
  },

  chevron: {
    cursor: 'pointer',
    margin: 3,
    fontSize: 18,
  }
})

class Paginator extends Component {
  static propTypes = {
    range: PropTypes.number.isRequired,
  };

  render() {
    const { range } = this.props;

    return (
      <div className={css(styles.container)}>
        <FontAwesome
          name="chevron-left"
          className={css(styles.chevron)}
        />
          <div className={css(styles.box)}>1</div>
        <FontAwesome
          name="chevron-right"
          className={css(styles.chevron)}
        />
      </div>
    );
  }
}
console.log(styles)

class App extends Component {
  state = {
    selectedPage: 1,
  };

  render() {
    return (
      <div>
        <Paginator />
      </div>
    );
  }
}

export default App;
