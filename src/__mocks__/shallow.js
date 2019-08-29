import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

export default (component) => {
  return toJSON(shallow(component));
};