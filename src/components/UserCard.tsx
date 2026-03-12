type User = {
  id: number
  name: string
  email: string
}

type Props = {
  user: User
}

function UserCard({ user }: Props) {

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )

}

export default UserCard