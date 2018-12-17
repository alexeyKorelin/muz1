export const initState = ({req, query}) => {
  const isServer = !!req;
  if (isServer) {
    const initialState = query && query.initialState || null;

    return {
      initialState: {...initialState},
      isServer: true,
      env: process.env.NODE_ENV
    }
  } else {
    return {
      initialState: null,
      isServer: false,
      env: process.env.NODE_ENV
    }
  }
}

export const indexState = (artists, albums) => {
  return {
    artists: {items: (artists !== undefined && artists) ? artists : []},
    albums: {items: (albums !== undefined && albums) ? albums : []}
  }
}

export const artistState = (artist) => {
  return {
    artist: {
      current: (artist !== undefined && artist) ? artist : null
    }
  };
}

const notFound = (state) => {
  return {
    ...state,
    status: 404
  }
}
