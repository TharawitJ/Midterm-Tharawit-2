import useUserStore from "../store/UserStore";

function ListUI() {
  const { content, createdAt, isdone, updatedAt } = useUserStore(
    (state) => state.todoList
  );
//   console.log(content)
  return (
    <div>
      <p>content</p>
      <p>createdAt</p>
      <p>isdone</p>
      <p>updatedAt</p>
    </div>
  );
}

export default ListUI;
