import { Avatar } from "../../components/Avatar"

const Home = () => {
  return (
    <div className="flex grow items-center justify-between gap-12">
      <div className="flex flex-col 2xl:flex-row text-6xl font-bold leading-normal whitespace-nowrap">
        <span className="text-heading">Hi👋&nbsp;</span>
        <span className="text-heading">my name is&nbsp;</span>
        <span className="text-gradient">Jean Evangelista</span>
      </div>
      <Avatar />
    </div>
  )
}

export default Home
