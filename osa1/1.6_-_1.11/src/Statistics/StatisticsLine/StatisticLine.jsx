import "./StatisticsLine.css";

const StatisticsLine = ({ title, value, tr, isPercentage }) => {

    let output = tr ?  (<tr className="tr-format">  
                            <td>{title}</td>
                            <td>{value}{isPercentage?"%":null}</td></tr>)
                    :  (<p className="p-format">{title}:{value}</p>); 

    return output
    }

export default StatisticsLine;
