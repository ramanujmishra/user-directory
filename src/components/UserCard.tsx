import "./UserCard.css"

type User = {
  id: number
  name: string
  email: string
   address: {
    city: string
  }
}

type Props = {
  user: User
}

function UserCard({ user }: Props) {

  return (
    <div className="user-card">
      <div className="user-name">{user.name}</div>
      <div className="user-email">{user.email}</div>
      <div className="user-city">{user.address.city}</div>
    </div>
  )

}

export default UserCard