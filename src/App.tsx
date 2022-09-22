import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import classes from './App.module.css'
// import { About } from './pages/About'
// import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Navbar />
        {/* <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch> */}
      </div>
    </BrowserRouter>
  )
}

export default App
