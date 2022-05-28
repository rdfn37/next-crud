import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const [clients, setClients] = useState<Client[]>([]);
  const [show, setShow] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.empty());
  const [load, setLoad] = useState(true)

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      setShow("table");
    }).then(() => setLoad(false))
  }

  function clientSelect(client: Client) {
    setClient(client);
    setShow("form");
  }

  async function deleteClient(client: Client) {
    setLoad(true)
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    setLoad(true)
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setShow("form");
    setClient(Client.empty());
  }

  return {
    getAll,
    clientSelect,
    deleteClient,
    saveClient,
    newClient,
    show,
    clients,
    client,
    setShow,
    load
  }
}
