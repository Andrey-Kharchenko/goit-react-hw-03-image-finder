import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, showModal }) => {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {gallery &&
            gallery.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  data={image}
                  showModal={showModal}
                />
              );
            })}
        </ul>
      </>
    );
};

ImageGallery.propTypes = {
  showModal: PropTypes.func.isRequired,
};