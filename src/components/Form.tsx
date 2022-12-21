import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client;
  clientChanged?: (client: Client) => void;
  canceled?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id ? (
        <Input text="Código" value={id} onlyRead className="mb-4" />
      ) : (
        false
      )}
      <Input text="Nome" value={name} valueChanged={setName} className="mb-4" />
      <Input text="Idade" value={age} valueChanged={setAge} type="number" />
      <div className="flex justify-end mt-5">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.clientChanged?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button color="gray" onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
