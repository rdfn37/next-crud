import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const clients = [
    new Client("Renato", 21, "123"),
    new Client("Pedro", 22, "456"),
    new Client("Victoria", 17, "789"),
  ];

  function clientSelect(client: Client) {
    console.log(client.name);
  }

  function clientDelet(client: Client) {
    console.log(client.name);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button color="green">New Client</Button>
        </div>
        <Table
          clients={clients}
          clientSelect={clientSelect}
          clientDelet={clientDelet}
        />
        <Form client={clients[0]}/>
      </Layout>
    </div>
  );
};

export default Home;
