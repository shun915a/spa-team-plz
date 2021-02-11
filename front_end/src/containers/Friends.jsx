import React, { Fragment, useEffect } from 'react';


// apis
import { fetchFriends } from '../apis/friends';

export const Friends = () => {
  useEffect(() => {
    fetchFriends()
    .then((data) =>
      console.log(data)
    )
  }, [])
  return (
    <Fragment>
      フレンド募集一覧
    </Fragment>
  )
}