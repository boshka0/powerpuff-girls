import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';

import {
  episodesSelector,
  showSelector,
  episodesLoadingSelector,
  showLoadingSelector,
  episodesErrorSelector,
  showErrorSelector
} from '../../selectors';
import { loadEpisodes } from '../../actions/episodes';
import { loadShow } from '../../actions/show';
import EpisodePreview from './episode-preview';
import Loader from '../loader';
import Error from '../error';
import './home-page.scss';

const blockName = 'about';
const showBlockName = `${blockName}-show`;
const episodesBlockName = `${blockName}-episodes`;

const HomePage = ({
  episodes,
  show,
  loadEpisodes,
  loadShow,
  isLoadingEpisodes,
  isLoadingShow,
  episodesError,
  showError,
}) => {
  useEffect(() => {
    loadEpisodes();
    loadShow();
  }, [loadEpisodes, loadShow]);

  const showImageSrc = get(show, 'image.medium', '');
  const isLoading = isLoadingEpisodes || isLoadingShow;

  return isLoading ? <Loader /> : (
    <div className={blockName}>
      {showError ? <Error block="show info" /> : (
        <div className={`${blockName}-show`}>
          <h1 className={`${showBlockName}-title`}>{show.name}</h1>
          <div className={`${showBlockName}-info`}>
            <img
              alt={show.name}
              src={showImageSrc}
              className={`${showBlockName}-image`}
            />
            <div
              className={`${showBlockName}-description`}
              dangerouslySetInnerHTML={{
              __html: show.summary,
              }}
            />
          </div>
        </div>
      )}
      {episodesError ? <Error block="episodes list" /> : (
        <div className={`${blockName}-episodes`}>
          <h2 className={`${episodesBlockName}-title`}>Episode list:</h2>
          <div className={`${episodesBlockName}-container`}>
            { episodes.map((episode, index) => (
              <Link
                key={index}
                to={`/episodes/${episode.id}`}
              >
                <EpisodePreview
                  episodeInfo={episode}
                />
              </Link>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

HomePage.propTypes = {
  isLoadingEpisodes: PropTypes.bool,
  isLoadingShow: PropTypes.bool,
  loadEpisodes: PropTypes.func,
  loadShow: PropTypes.func,
  episodes: PropTypes.arrayOf(PropTypes.object),
  show: PropTypes.object,
  episodesError: PropTypes.string,
  showError: PropTypes.string
};

export default connect(
  state => ({
    episodes: episodesSelector(state),
    show: showSelector(state),
    isLoadingEpisodes: episodesLoadingSelector(state),
    isLoadingShow: showLoadingSelector(state),
    episodesError: episodesErrorSelector(state),
    showError: showErrorSelector(state)
  }),
  dispatch => ({
    loadEpisodes: () => dispatch(loadEpisodes()),
    loadShow: () => dispatch(loadShow())
  })
)(HomePage);
