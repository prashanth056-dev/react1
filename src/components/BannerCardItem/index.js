import './index.css'

const BannerCardItem = props => {
  const {eachItem} = props
  const {headerText, description, className} = eachItem
  return (
    <li className={className}>
      <div className="cont">
        <h1 className="heading">{headerText}</h1>
        <p className="info">{description}</p>
        <button className="btn" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
