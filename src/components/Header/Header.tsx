/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react';

const Header =()=>{
    return(
    <div css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen'
        }
      }}>
        header
    </div>);
}

export default Header;