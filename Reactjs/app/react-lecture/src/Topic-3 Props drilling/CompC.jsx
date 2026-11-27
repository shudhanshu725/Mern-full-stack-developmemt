import CompD from "./CompB"

const CompC = ({user}) => {
    return (
        <div>
            <h3>Comp- C</h3>
            <CompD user = {user} />
        </div>
    )
}

export default CompC;