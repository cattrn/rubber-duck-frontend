import avatar from "./front-facing-duck.jpg"

const DuckAvatar = () => {
  return (
    <img
      src={avatar}
      alt="What the Duck?! avatar"
      className="rounded-lg bg-white w-[150px]"
    />
  )
}

export default DuckAvatar
