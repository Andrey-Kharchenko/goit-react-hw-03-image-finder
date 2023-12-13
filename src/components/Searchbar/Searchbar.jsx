import { Component } from 'react';
import styles from './Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    value: '',
    };
    
    handleChange = ({ target: { value } }) => {
        this.setState({ value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleInput(this.setState.value)
        this.setState({value:''})
    }

  render() {
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormbutton}>
              <span className={styles.SearchForm_button_label}>Search</span>
            </button>
            <input
              className={styles.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
        </header>
      </>
    );
  }
}
