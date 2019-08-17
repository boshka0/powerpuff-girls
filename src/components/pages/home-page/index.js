import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  episodesSelector,
  showSelector,
  episodesLoadingSelector,
  showLoadingSelector,
  episodesErrorSelector,
  showErrorSelector
} from '../../../store/selectors';
import { loadEpisodes } from '../../../store/actions/episodes';
import { loadShow } from '../../../store/actions/show';
import { defaultImg } from '../../../utils/defaultValues';

import Loader from '../../common-components/loader';
import Error from '../../common-components/error';
import EpisodePreview from './episode-preview';

import './home-page.scss';

const blockName = 'about';
const showBlockName = `${blockName}-show`;
const episodesBlockName = `${blockName}-episodes`;

const HomePage = ({
  episodes,
  show,
  loadEpisodes,
  loadShow,
  isLoadingEpisodes = true,
  isLoadingShow = true,
  episodesError,
  showError,
}) => {
  useEffect(() => {
    loadEpisodes();
    loadShow();
  }, [loadEpisodes, loadShow]);

  const imageObj = show.image;
  const isLoading = isLoadingEpisodes || isLoadingShow;

  return isLoading ? <Loader /> : (
    <div className={blockName}>
      {showError ? <Error block="show info" /> : (
        <div className={`${blockName}-show`}>
          <h1 className={`${showBlockName}__title`}>{show.name}</h1>
          <div className={`${showBlockName}__info`}>
            <img
              alt={show.name}
              src={imageObj ? imageObj.medium : defaultImg}
              className={`${showBlockName}__image`}
            />
            <div
              className={`${showBlockName}__description`}
              dangerouslySetInnerHTML={{
              __html: show.summary,
              }}
            />
          </div>
        </div>
      )}
      {episodesError ? <Error block="episodes list" /> : (
        <div className={`${blockName}-episodes`}>
          <h2 className={`${episodesBlockName}__title`}>Episode list:</h2>
          <div className={`${episodesBlockName}__container`}>
            { episodes.map((episode, index) => (
              <Link
                className={`${episodesBlockName}__link`}
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
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string
    }),
    name: PropTypes.string,
    number: PropTypes.number,
    season: PropTypes.number,
    summary: PropTypes.string,
  })),
  show: PropTypes.shape({
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string
    }),
    name: PropTypes.string,
    summary: PropTypes.string,
  }),
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
