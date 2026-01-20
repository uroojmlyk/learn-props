import Header from "./components/Header"
import UserCard from "./components/UserCard"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />

      <UserCard name="Urooj" age={22} role="Frontend Developer" />
      <UserCard name="Ali" age={25} role="Backend Developer" />
      <UserCard name="Sara" age={23} role="UI Designer" />

      <Footer />
    </div>
  )
}

export default App
