import Client from "../core/Client";
import { Edit, Delete } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelect?: (client: Client) => void;
  clientDelet?: (client: Client) => void;
}

const Table = (props: TableProps) => {
  const showActions = props.clientDelet || props.clientSelect;

  function renderTableHeader() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? <th className="p-4">Actions</th> : null}
      </tr>
    );
  }

  function renderTableBody() {
    return props.clients?.map((e, i) => {
      return (
        <tr
          key={i}
          className={`${
            i % 2 === 0
              ? "bg-gray-700 text-gray-200"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          <td className="text-left p-4">{e.id}</td>
          <td className="text-left p-4">{e.name}</td>
          <td className="text-left p-4">{e.age}</td>
          {showActions ? renderActions(e) : null}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.clientSelect ? (
          <button onClick={() => props.clientSelect?.(client)} className="p-4 m-1 text-green-600 rounded-full hover:bg-white">
            {Edit}
          </button>
        ) : (
          false
        )}

        {props.clientDelet ? (
          <button onClick={() => props.clientDelet?.(client)} className="p-4 m-1 text-red-600 rounded-full hover:bg-white">
            {Delete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
        {renderTableHeader()}
      </thead>
      <tbody>{renderTableBody()}</tbody>
    </table>
  );
};

export default Table;
