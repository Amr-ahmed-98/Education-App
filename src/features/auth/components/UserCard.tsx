import { useUser } from "../hooks/useUser";

interface Props{
    id:string
}

function UserCard({id}: Props){
     const { data, isLoading, isError } = useUser(id);
     
  if (isLoading) return <div>Loading user...</div>;
  if (isError) return <div>Failed to load user</div>;
 return (
    <div className="p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold">{data?.name}</h2>
      <p className="text-gray-600">{data?.email}</p>
    </div>
  );

}

export default UserCard;
