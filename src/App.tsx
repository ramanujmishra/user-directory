import { useEffect, useState } from "react";


type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}; //typescript code to keep user strongly typed


//App is reusable component in react
function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data)
         });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>User Directory</h1>

      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
      {filteredUsers.map(user => (
        <div key={user.id} style={{ marginTop: "10px" }}>
          <b>{user.name}</b>
          <div>{user.email}</div>
          <div>{user.address.city}</div>
        </div>
      ))}

    </div>
  );
}

export default App; // export default makes App as main method just like main() in c#