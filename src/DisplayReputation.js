function DisplayReputation (props) {
    let rep = props.rep;

    if(rep > 1000000) {
        rep = Math.floor(rep/1000000) + Number(((rep % 1000000)*0.000001).toFixed(1));
        return `${rep}m`;
    } else if(rep > 1000) {
        rep = Math.floor(rep/1000) + Number(((rep % 1000)*0.001).toFixed(1));
        return `${rep}k`
    } else return `${rep}`;
}

export default DisplayReputation;