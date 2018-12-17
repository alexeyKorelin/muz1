import API from '../utils/api'
import {
  indexState,
  artistState
} from './states';

// Getters =========================================================

async function getTopArtists() {
  return await API.chart.getTopArtists()
    .then(data => data);
}

async function getAlbums() {
  return await API.chart.getAlbums()
    .then(data => data);
}

async function getArtist(mbid) {
  return await API.artist.getArtist(mbid)
    .then(data => data);
}

const catchErrors = p =>
  p.catch(err=> {
    console.log('Error via fetching');
    console.log(err);
    return ({ error: err.error, status: err.status })
  });


// Handlers ========================================================

export async function handleIndex(options={}) {
  const [ artists, albums ] = await Promise.all([
    getTopArtists(),
    getAlbums(),
  ].map(catchErrors));
  const state = indexState(artists, albums);
  return state;
}

export async function handleArtist(mbid, options={}) {
  const [ artist ] = await Promise.all([
    getArtist(mbid)
  ].map(catchErrors));
  const state = artistState(artist);
  return state;
}