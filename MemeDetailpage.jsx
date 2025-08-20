import React, { useState } from 'react';
import './MemeDetailPage.css';

const MemeDetailPage = () => {
  const [infoExpanded, setInfoExpanded] = useState(false);
  const [transactionsExpanded, setTransactionsExpanded] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [fearGreedScore] = useState(72);

  // Dummy data for the meme coin
  const memeData = {
    name: 'TurboToad',
    symbol: 'TTOAD',
    price: 0.0847,
    change: 15.3,
    marketCap: '5.2M',
    volume24h: '650K',
    liquidity: '180K'
  };

  const recentTransactions = [
    { type: 'BUY', amount: '1,250 TTOAD', price: '0.0845', time: '2m ago', user: '0x7a9...f3c' },
    { type: 'SELL', amount: '890 TTOAD', price: '0.0843', time: '5m ago', user: '0x2b1...8e7' },
    { type: 'BUY', amount: '3,400 TTOAD', price: '0.0841', time: '8m ago', user: '0x9c4...2a1' },
    { type: 'BUY', amount: '567 TTOAD', price: '0.0839', time: '12m ago', user: '0x1f8...9d5' },
  ];

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      console.log('Chat message:', chatMessage);
      setChatMessage('');
    }
  };

  const handleVote = () => {
    console.log('Fear & Greed vote submitted');
  };

  const getFearGreedColor = (score) => {
    if (score >= 75) return '#00ff88';
    if (score >= 50) return '#ffa726';
    if (score >= 25) return '#ff9800';
    return '#ff6b6b';
  };

  const getFearGreedLabel = (score) => {
    if (score >= 75) return 'EXTREME GREED';
    if (score >= 50) return 'GREED';
    if (score >= 25) return 'FEAR';
    return 'EXTREME FEAR';
  };

  return (
    <div className="meme-detail-page">
      <div className="main-content">
        {/* Header Section */}
        <div className="coin-header">
          <h1 className="coin-name">{memeData.name} ✨✨</h1>
          <span className="coin-symbol">{memeData.symbol}</span>
        </div>

        {/* Price & Change Section */}
        <div className="price-section">
          <div className="current-price">${memeData.price}</div>
          <div className={`price-change ${memeData.change > 0 ? 'positive' : 'negative'}`}>
            {memeData.change > 0 ? '+' : ''}{memeData.change}%
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="chart-container">
          <div className="chart-placeholder">
            <span className="chart-text">Gráfico</span>
          </div>
        </div>

        {/* Information Panel */}
        <div className="info-panel">
          <div 
            className="panel-header"
            onClick={() => setInfoExpanded(!infoExpanded)}
          >
            <h3>Información del Meme</h3>
            <span className={`expand-icon ${infoExpanded ? 'expanded' : ''}`}>▼</span>
          </div>
          {infoExpanded && (
            <div className="panel-content">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Market Cap:</span>
                  <span className="info-value">${memeData.marketCap}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Volumen (24h):</span>
                  <span className="info-value">${memeData.volume24h}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Liquidez:</span>
                  <span className="info-value">${memeData.liquidity}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recent Transactions Panel */}
        <div className="transactions-panel">
          <div 
            className="panel-header"
            onClick={() => setTransactionsExpanded(!transactionsExpanded)}
          >
            <h3>Transacciones Recientes</h3>
            <span className={`expand-icon ${transactionsExpanded ? 'expanded' : ''}`}>▼</span>
          </div>
          {transactionsExpanded && (
            <div className="panel-content">
              <div className="transactions-list">
                {recentTransactions.map((tx, index) => (
                  <div key={index} className="transaction-item">
                    <div className="tx-left">
                      <span className={`tx-type ${tx.type.toLowerCase()}`}>{tx.type}</span>
                      <span className="tx-amount">{tx.amount}</span>
                    </div>
                    <div className="tx-right">
                      <span className="tx-price">${tx.price}</span>
                      <span className="tx-time">{tx.time}</span>
                      <span className="tx-user">{tx.user}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sidebar">
        {/* Chat Box */}
        <div className="chat-section">
          <h3 className="chat-title">CHAT</h3>
          <div className="chat-messages">
            <div className="chat-message">
              <span className="chat-user">0x7a9...f3c:</span>
              <span className="chat-text">🚀 TO THE MOON!</span>
            </div>
            <div className="chat-message">
              <span className="chat-user">0x2b1...8e7:</span>
              <span className="chat-text">Diamond hands 💎</span>
            </div>
            <div className="chat-message">
              <span className="chat-user">0x9c4...2a1:</span>
              <span className="chat-text">Just bought the dip</span>
            </div>
          </div>
          <form className="chat-input-form" onSubmit={handleChatSubmit}>
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button type="submit" className="chat-send">Send</button>
          </form>
        </div>

        {/* Fear & Greed Meter */}
        <div className="fear-greed-section">
          <h3 className="fear-greed-title">FEAR & GREED</h3>
          <div className="fear-greed-meter">
            <div className="meter-container">
              <div 
                className="meter-fill"
                style={{
                  background: `conic-gradient(${getFearGreedColor(fearGreedScore)} ${fearGreedScore * 3.6}deg, rgba(255,255,255,0.1) 0deg)`
                }}
              >
                <div className="meter-center">
                  <span className="meter-score">{fearGreedScore}</span>
                  <span className="meter-label">{getFearGreedLabel(fearGreedScore)}</span>
                </div>
              </div>
            </div>
          </div>
          <button className="vote-button" onClick={handleVote}>
            Votar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemeDetailPage;