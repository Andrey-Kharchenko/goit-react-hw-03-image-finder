import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target)
      this.props.closeModal();
  };

  render() {
    const { largeImageURL, tags } = this.props.img;
    return (
      <div className={styles.Overlay} onClick={this.handlePressESC}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
