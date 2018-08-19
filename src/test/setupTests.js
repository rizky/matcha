import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Response, Request, Headers, fetch } from 'whatwg-fetch';

configure({ adapter: new Adapter() });

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;
