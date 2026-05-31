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
            <h1>German Learning App</h1>
            <h2>Chose Your Level</h2>
            </div>
            <div className='levels'>
            <button className={selectedLevel === 'A1' ? 'active': ''} 
            onClick={() => setSelectedLevel('A1')} >
                A1
            </button>
            <button className={selectedLevel === 'A2' ? 'active': ''} 
            onClick={() => setSelectedLevel('A2')}>
                A2
            </button>
            <button className={selectedLevel === 'B1' ? 'active': ''} 
            onClick={() => setSelectedLevel('B1')}>
                B1
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