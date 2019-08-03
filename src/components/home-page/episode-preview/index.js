import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { defaultImg } from '../../../utils/defaultValues';

import './episode.scss';

const blockName = 'episode-preview';

const EpisodePreview = ({ episodeInfo = {} }) => {
  const imageSrc = get(episodeInfo, 'image.medium', defaultImg);

  return (
    <div className={`${blockName}`}>
      <img
        className={`${blockName}-image`}
        src={imageSrc}
        alt={episodeInfo.name}
      />
      <div className={`${blockName}-title`}>
        <p className={`${blockName}-title-count`}>
          Season {episodeInfo.season}. Episode {episodeInfo.number}
        </p>
        <p>{episodeInfo.name}</p>
      </div>
    </div>
  );
};

EpisodePreview.propTypes = {
  episodeInfo: PropTypes.object,
};

export default EpisodePreview;
