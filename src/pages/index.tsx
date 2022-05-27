import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [show, setShow] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.empty())

  const clients = [
    new Client("Renato", 21, "123"),
    new Client("Pedro", 22, "456"),
    new Client("Victoria", 17, "789"),
  ];

  function clientSelect(client: Client) {
    setClient(client)
    setShow('form')
  }

  function clientDelet(client: Client) {
    console.log(client.name);
  }

  function saveClient(client: Client) {
    console.log(client);
    setShow("table");
  }

  function newClient() {
    setShow("form")
    setClient(Client.empty())
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro Simples">
        {show === "table" ? (
          <>
            <div className="flex justify-end">
              <Button color="green" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelect={clientSelect}
              clientDelet={clientDelet}
            />
          </>
        ) : (
          <Form
            client={client}
            cancel={() => setShow("table")}
            clientChange={saveClient}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
