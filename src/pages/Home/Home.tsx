import { Avatar } from "../../components/Avatar"

const Home = () => {
  return (
    <div className="flex grow flex-col items-center justify-center gap-10">
      <div className="flex sm:flex-col lg:flex-row xs:text-xl sm:text-4xl md:text-5xl xl:text-6xl font-boldwhitespace-nowrap">
        <span className="text-heading">Hi👋&nbsp;</span>
        <span className="text-heading">my name is&nbsp;</span>
        <span className="text-gradient">Jean Evangelista</span>
      </div>
      <Avatar />
    </div>
  )
}

export default Home
