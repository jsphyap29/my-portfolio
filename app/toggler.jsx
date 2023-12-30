import React from 'react'
import '/app/globals.css'
import { ThemeProvider } from 'next-themes'
import Home from './page'

const toggler = ({Component, pageProps}) => {
  return (
    <div>
        <ThemeProvider enableSystem={true} attribute='class'>
            <Component {...pageProps}/>
        </ThemeProvider>
        
    </div>
  )
}

    export default toggler
