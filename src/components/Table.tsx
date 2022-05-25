import Client from "../core/Client";

interface TableProps {
  clients: Client[];
}

const Table = (props: TableProps) => {
  function renderTableHeader() {
    return (
      <tr>
        <th className="">ID</th>
        <th className="">Name</th>
        <th className="">Age</th>
      </tr>
    );
  }

  function renderTableBody() {
    return props.clients?.map((e, i) => {
      return (
        <tr key={i}>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.age}</td>
        </tr>
      );
    });
  }

  console.log(props.clients);

  return (
    <table>
      <thead>{renderTableHeader()}</thead>
      <tbody>{renderTableBody()}</tbody>
    </table>
  );
};

export default Table;
