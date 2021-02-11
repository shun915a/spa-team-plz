import React, { Fragment, useEffect } from 'react';


// apis
import { fetchPosts } from '../apis/posts';

export const Posts = () => {
  useEffect(() => {
    fetchPosts()
    .then((data) =>
      console.log(data)
    )
  }, [])
  return (
    <Fragment>
      全募集一覧
    </Fragment>
  )
}