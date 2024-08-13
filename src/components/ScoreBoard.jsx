import '../styles/scoreboard.css'

function ScoreBoard({ score, total }) {
    return(
        <div className='scoreboard'>
            {score}/{total}
        </div>
    )
        
}

export default ScoreBoard