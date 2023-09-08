import { useEffect, useState } from "react"

const MIN = 0
const MAX = 19

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const generateAvatars = (max: number) => {
  const avatars = []

  for (let i = 0; i <= max; i++) {
    avatars.push(`/images/avatar${i + 1}.png`)
  }

  return avatars
}

const messages = [
  "Hey there! You found me!",
  "Surprise click! What can I do for you?",
  "Whoa, you clicked me! How can I assist you today?",
  "You clicked on me! You're in for a treat!",
  "Ta-da! You clicked the magic avatar!",
  "Well, look who's curious! 😄",
  "Hello, click-happy friend! What's on your mind?",
  "Clickity click! How can I make your day better?",
  "You found the secret click zone! What's up?",
  "Clickety-clack! How can I brighten your day?",
  "Boop! You clicked me. What can I do for you?",
  "High-five for clicking! What brings you here?",
  "Hello from the other side of your click! 😊",
  "You're the click master! How can I assist you?",
  "Click me once, click me twice, what's your request?",
  "I'm here because you clicked, now what's on your mind?",
  "Click me, and let the fun begin!",
  "Well, look who's feeling click-happy! How can I help?",
  "Click me if you dare! 😉",
  "You clicked me into action! What's your wish today?",
]

const Avatar = () => {
  const [position, setPosition] = useState(randomNumber(MIN, MAX))

  const [message, setMessage] = useState("")
  const avatars = generateAvatars(MAX)

  const shufflePosition = () => {
    const newPosition = randomNumber(MIN, MAX)
    if (newPosition === position) {
      shufflePosition()
    }
    setPosition(newPosition)
  }

  const onClick = () => {
    shufflePosition()
    setMessage(messages[randomNumber(MIN, MAX)])
  }

  useEffect(() => {
    if (message !== "") {
      const timeoutId = setTimeout(() => {
        setMessage("")
      }, 3000)

      return () => clearTimeout(timeoutId)
    }
  }, [message])

  return (
    <div>
      {message && (
        <div className="w-[200px] z-10 fixed">
          <div className="bg-white text-primary p-2 rounded-lg mb-2 border-2 border-pink">
            <span>{message}</span>

            <div className="absolute right-full left-1/2 transform translate-x-1/2 rotate-45 w-4 h-4 bg-white border-b-2 border-r-2 border-pink"></div>
          </div>
        </div>
      )}
      <img
        className="h-auto cursor-pointer"
        src={avatars[position]}
        onMouseEnter={shufflePosition}
        onClick={onClick}
      />
    </div>
  )
}

export default Avatar
