
function Policy(props) {
    return (
        <div className="card mb-4 rounded-3 shadow-sm" style={{"width": "18rem"}}>
        <div className="card-body">
        <h5 className="card-title">
        {props.policy.content.policy.name}
        </h5>
        <p className="card-text">ContradctId : {props.policy.content._id.$oid}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>  
    </div>
    )
}

export default Policy