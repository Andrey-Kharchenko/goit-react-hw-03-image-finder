import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ showModal, data }) => {
  const { tags, webformatURL, largeImageURL } = data;
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
