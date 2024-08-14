import '../styles/scoreboard.css'

function ScoreBoard({ score, total, bestScore }) {
    return(
        <div className='scoreboard'>
            {score}/{total}
            <br />
            Best Score: {bestScore}
        </div>
    )
        
}

export default ScoreBoard