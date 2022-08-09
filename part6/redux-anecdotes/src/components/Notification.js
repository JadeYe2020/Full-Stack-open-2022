import { connect } from "react-redux"

const Notification = (props) => {
  // don't show the component if there's no message to show
  if (!props.notification) {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      { props.notification }
    </div>
  )
}

const mapStateToProps = (state) => {
  return { notification: state.notification }
}

const ConnectedNotification = connect(mapStateToProps, null)(Notification)
export default ConnectedNotification