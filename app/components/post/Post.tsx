import React, { FC } from 'react';
import PostActions from './postActions/PostActions';
import PostComments from './postComment/PostComment';
import PostContent from './postContent/PostContent';
import PostDate from './postDate/PostDate';
import PostDescription from './postDescription/PostDescription';
import PostHeader from './postHeader/PostHeader';
import PostLikes from './postLikes/PostLikes';

export enum TypeEnum {
  image = 'image',
  video = 'video',
}

export interface IContent {
  type: TypeEnum;
  source: string;
}

export interface IPost {
  username: string;
  place: string;
  likeCount: number;
  commentCount: number;
  description: string;
  publishedAt: string;
  contents: IContent[];
}

export interface IPostProps {
  postData: IPost;
}

const Post: FC<IPostProps> = ({ postData }) => {
  return (
    <>
      <PostHeader username={postData.username} place={postData.place} />
      <PostContent content={postData.contents} />
      <PostActions />
      <PostLikes count={postData.likeCount} />
      <PostDescription
        username={postData.username}
        description={postData.description}
      />
      <PostComments count={postData.commentCount} />
      <PostDate date={postData.publishedAt} />
    </>
  );
};

export default Post;
