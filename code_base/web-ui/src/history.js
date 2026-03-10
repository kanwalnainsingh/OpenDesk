import { createBrowserHistory as history} from 'history';

export default history({ basename: process.env.PUBLIC_URL || '' });