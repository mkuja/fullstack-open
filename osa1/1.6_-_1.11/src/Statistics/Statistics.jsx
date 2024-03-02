import StatisticsLine from "./StatisticsLine/StatisticLine";

const Statistics = ({good, neutral, bad}) => {
    const feedback_given = good+neutral+bad > 0;

    return (
        <div>
            <h1>Statistics</h1>
            {feedback_given ? null : <p>No feedback given</p>}
            <table>
                <tbody>
                {feedback_given ?
                <>
                    <StatisticsLine title="Good" value={good} tr />
                    <StatisticsLine title="Neutral" value={neutral} tr />
                    <StatisticsLine title="Bad" value={bad} tr />
                    
                    <StatisticsLine
                        title="Total experiences" 
                        value={good+neutral+bad}
                        tr />
                    <StatisticsLine 
                        title="Average" 
                        value={Math.round((good*1 + bad*(-1))*100 / (good+neutral+bad))/100}
                        tr />
                    <StatisticsLine 
                        title="Positive feedback" 
                        value={parseInt((good / (good+neutral+bad))*100)}
                        tr
                        isPercentage />
                </> : null}

                </tbody>
            </table>

        </div>
    );
}

export default Statistics;
