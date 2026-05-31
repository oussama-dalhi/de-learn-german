import './SetupScreen.css'
function SetupScreen({
  selectedLevel,
  setSelectedLevel,
  setAppStarted
}) {
    return (
        <div className='setup-screen'>
            <div className="setup-card">
            <div className="titles">
            <h1>🇩🇪 Learn German</h1>
            <p className='description'>Master vocabulary with flashcards
            and example sentences</p>
            <h2>Choose your current level</h2>
            </div>
            <div className='levels'>
            <button className={selectedLevel === 'A1' ? 'active': ''} 
            onClick={() => setSelectedLevel('A1')} >
                A1 Beginner
            </button>
            <button className={selectedLevel === 'A2' ? 'active': ''} 
            onClick={() => setSelectedLevel('A2')}>
                A2 Elementary
            </button>
            <button className={selectedLevel === 'B1' ? 'active': ''} 
            onClick={() => setSelectedLevel('B1')}>
                B1 Intermediate
            </button>
            <button className="start-btn" 
            onClick={() => setAppStarted(true)}>
                Start Learning
            </button>
            </div>
          </div>
        </div>
    );
}
export default SetupScreen;