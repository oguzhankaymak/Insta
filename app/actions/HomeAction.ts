import { IPost } from '../components/post/Post';
import { ResultEnum } from './Status';

export interface IResult {
  data: IPost[] | null;
  result: ResultEnum;
}

export const getPosts = async (): Promise<IResult> => {
  try {
    const response = await fetch('https://my-clone-api.herokuapp.com/posts');
    const data = await response.json();
    return {
      data,
      result: response.status === 200 ? ResultEnum.SUCCESS : ResultEnum.FAILURE,
    };
  } catch (error) {
    console.error('response ERROR:', error);
    return {
      data: null,
      result: ResultEnum.FAILURE,
    };
  }
};
