import React from 'react';

function Article({title, date = "January 1, 1970", preview}


    // post: {
    //     title,
    //     date = "January 1, 1970",
    //     preview,
    //     minutes = 0
    // }
  ) {
  
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article