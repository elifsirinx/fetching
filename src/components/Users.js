import { useEffect, useState } from "react";

//Component mount olduğu anda veri kaynağına erişmeye çalışacağız.
function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((datas) => {
        setUsers(datas);
        //setIsLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>USERS</h1>

      {isLoading && <div>Loading...</div>}

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
