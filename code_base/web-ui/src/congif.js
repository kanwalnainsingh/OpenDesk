const dev = {
    API_URL: "LOCALHOST:3000"
};

const prod = {
    API_URL: window.location.protocol+ '//' + window.location.hostname
};

export const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;