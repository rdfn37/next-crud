import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const clients = [
    new Client('Renato', 21, "123"),
    new Client('Pedro', 22, "456"),
    new Client('Victoria', 17, "789"),
  ]

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro Simples">
        <Table clients={clients}/>
      </Layout>
    </div>
  );
};

export default Home;
