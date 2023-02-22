// Write your code here.
import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  return (
    <div className="list-items">
      <li className={className}>
        <div className="list-elements">
          <h1 className="card-heading">{headerText}</h1>
          <p className="description">{description}</p>
          <button className="button-element">Show More</button>
        </div>
      </li>
    </div>
  )
}
export default UserProfile
