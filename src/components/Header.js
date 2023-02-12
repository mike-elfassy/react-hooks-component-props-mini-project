import React from 'react';

function Header({ name = "Blog Default" }) {
  return (
    <header>
        <h1>{name}</h1>
    </header>
  )
}

export default Header
