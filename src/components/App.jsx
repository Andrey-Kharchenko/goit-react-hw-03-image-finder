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

  handleInput = async searchText => {
    this.setState({ searchText });

    this.setState({
      isLoading: true,
      loadMore: true,
    });

    await getImage(searchText).then(gallery =>
      this.setState({ gallery: gallery })
    );
    this.setState({ isLoading: false });
  };

  showModal = modalShow => {
    this.setState({ isShowModal: true });
    this.setState({ modalShow });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  showButton = () => {
    this.setState({ loadMore: true });
  };

  handleLoadMore = async () => {
    const { page, searchText, gallery } = this.state;
    this.setState({ isLoading: true });
    console.log(gallery);

    await getImage(searchText, page + 1).then(newGallery => {
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...newGallery],
        page: prevState.page + 1,
        isLoading: false,
      }));
    });
  };

  render() {
    const { isLoading, loadMore, isShowModal, modalShow, gallery } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar handleInput={this.handleInput} />
        {isLoading ? (
          <Loader />
        ) : (
            <ImageGallery
              showModal={this.showModal}
              gallery={gallery} />
        )}
        {isShowModal && (
          <Modal
            closeModal={this.closeModal}
            img={modalShow}>
            </Modal>
        )}
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
