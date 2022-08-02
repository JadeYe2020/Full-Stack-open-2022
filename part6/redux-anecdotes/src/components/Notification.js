import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(({ notification }) => {
     if (notification) { 
      return notification
    }
  })

  // don't show the component if there's no message to show
  if (!notification) {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      { notification }
    </div>
  )
}

export default Notification