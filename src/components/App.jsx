import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getImage } from 'services/api';
import styles from './App.module.css';

export class App extends Component {
  state = {
    page: 1,
    searchText: '',
    isLoading: false,
    isShowModal: false,
    modalShow: {},
    loadMore: false,
    gallery: [],
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText) {
      this.setState({
        isLoading: true,
        loadMore: false,
        gallery: [],
        page: 1,
      });

      const newGallery = await getImage(searchText, 1);

      if (newGallery.length > 0) {
        this.setState({
          gallery: newGallery,
          isLoading: false,
          loadMore: newGallery.length >= 12,
        });
      } else {
        this.setState({
          isLoading: false,
          loadMore: false,
        });
      }
    }

    if (prevState.page !== page) {
      const newGallery = await getImage(searchText, page);

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...newGallery],
        isLoading: false,
        loadMore: newGallery.length >= 12,
      }));
    }
  }

  handleInput = async searchText => {
    this.setState({ searchText });
  };

  showModal = modalShow => {
    this.setState({ isShowModal: true });
    this.setState({ modalShow });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, loadMore, isShowModal, modalShow, gallery } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar handleInput={this.handleInput} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery showModal={this.showModal} gallery={gallery} />
        )}
        {isShowModal && (
          <Modal closeModal={this.closeModal} img={modalShow}></Modal>
        )}
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
