export default function User({ user }) {
return (
<>
    <p>{user.id} {user.name}</p>
    <p>{user.email}</p>
</>
)
}