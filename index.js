import React from 'react';
import {render} from 'react-dom';

class TagInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      focused: false,
      input: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  render() {
    const styles = {
      container: {
        border: '1px solid #ddd',
        padding: '5px',
        borderRadius: '5px',
      },

      items: {
        display: 'inline-block',
        padding: '2px',
        border: '1px solid blue',
        fontFamily: 'Helvetica, sans-serif',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer'
      },

      input: {
        outline: 'none',
        border: 'none',
        fontSize: '14px',
        fontFamily: 'Helvetica, sans-serif'
      }
    };
    return (
      <div>
        <ul style={styles.container}>
          {this.state.items.map((item, i) => 
            <li key={i} style={styles.items} onClick={this.handleRemoveItem(i)}>
              {item}
              <span>(x)</span>
            </li>
          )}
          <input
            style={styles.input}
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown} />
        </ul>
      </div>
    );
  }

  handleInputChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown(evt) {
    if ( evt.keyCode === 13 ) {
      this.setState(state => ({
        items: [...state.items, evt.target.value],
        input: ''
      }));
    }

    if ( this.state.items.length && evt.keyCode === 8 && !this.state.input.length ) {
      this.setState(state => ({
        items: state.items.slice(0, state.items.length - 1)
      }));
    }
  }

  handleRemoveItem(index) {
    return () => {
      this.setState(state => ({
        items: state.items.filter((item, i) => i !== index)
      }));
    }
  }
}

render(
  <TagInput />,
  document.getElementById('app')
);