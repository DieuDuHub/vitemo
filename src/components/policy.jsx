
function Policy(props) {
    return (
        <div>
          <div value={props.policy.content._id.$oid}>
              <ul>
                  <li>Hello , {props.policy.content.policy.name}</li>
              </ul>   
          </div>
        </div>
    )
}

export default Policy