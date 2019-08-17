import React from 'react';
import PropTypes from 'prop-types';

import { defaultImg } from '../../../../utils/defaultValues';

import './episode-preview.scss';

const blockName = 'episode-preview';

const EpisodePreview = ({ episodeInfo = {} }) => {
  const imageObj = episodeInfo.image;

  return (
    <div className={`${blockName}`}>
      <img
        className={`${blockName}__image`}
        src={imageObj ? imageObj.medium : defaultImg}
        alt={episodeInfo.name}
      />
      <div className={`${blockName}__title`}>
        <p className={`${blockName}__title-count`}>
          Season {episodeInfo.season}. Episode {episodeInfo.number}
        </p>
        <p>{episodeInfo.name}</p>
      </div>
    </div>
  );
};

EpisodePreview.propTypes = {
  episodeInfo: PropTypes.shape({
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string
    }),
    name: PropTypes.string,
    number: PropTypes.number,
    season: PropTypes.number,
  }),
};

export default EpisodePreview;
