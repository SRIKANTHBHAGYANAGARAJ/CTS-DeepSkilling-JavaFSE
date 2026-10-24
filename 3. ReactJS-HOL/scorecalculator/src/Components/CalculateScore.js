function percentToDecimal(decimal) {
    return (decimal * 100) + '%';
}

function calcScore(total, goal) {
    var percent = percentToDecimal(total / goal);
    return percent;
}
function CalculateScore({ Name, School, total, goal }) {
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {Name}</p>
            <p>School: {School}</p>
            <p>Total: {total} Marks</p>
            <p>Score: {calcScore(total, goal)}</p>
        </div>
    );
}