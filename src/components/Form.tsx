import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client?: Client;
  cancel: () => void;
  clientChange?: (client: Client) => void;
}

const Form = (props: FormProps) => {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id ? (
        <div className="mb-4">
          {/* <Input text="ID" value={id} readonly /> */}
          <span className="bg-purple-900 text-gray-200 p-2 rounded-xl">ID: {id}</span>
        </div>
      ) : (
        false
      )}
      <div className="mb-4">
        <Input text="Name" value={name} valueChange={setName} />
      </div>
      <div className="mb-4">
        <Input text="Age" type="number" value={age} valueChange={setAge} />
      </div>
      <div className="flex justify-end mt-3">
        <div className="mr-2">
          <Button
            color="blue"
            onClick={() => props.clientChange?.(new Client(name, +age, id))}
          >
            {id ? "Update" : "Save"}
          </Button>
        </div>
        <div>
          <Button onClick={() => props.cancel()}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
