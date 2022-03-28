import { FAILURE, SUCCESS } from './Status';

export const getPosts = async () => {
  try {
    const response = await fetch('https://my-clone-api.herokuapp.com/posts');
    const data = await response.json();
    return {
      data,
      result: response.status === 200 ? SUCCESS : FAILURE,
    };
  } catch (error) {
    console.error('response ERROR:', error);
    return {
      data: null,
      result: FAILURE,
    };
  }
};
