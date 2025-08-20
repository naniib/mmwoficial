import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MemeDetailPage from './components/MemeDetailPage';

function App() {
  const [count, setCount] = useState(0)
  const [showMemeDetail, setShowMemeDetail] = useState(false)

  if (showMemeDetail) {
    return <MemeDetailPage />
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button 
            type="button" 
            onClick={() => setShowMemeDetail(true)}
            style={{ 
              marginTop: '10px', 
              padding: '10px 20px', 
              backgroundColor: '#22d3ee', 
              color: 'black', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            View Meme Detail Page
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
