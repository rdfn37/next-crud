import type { NextPage } from "next";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";
import Loader from "../components/Loader";

const Home: NextPage = () => {
  const {
    newClient,
    show,
    clients,
    clientSelect,
    deleteClient,
    client,
    saveClient,
    setShow,
    load,
  } = useClients();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro Simples">
        {load ? (
          <Loader />
        ) : (
          <>
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
                  clientDelet={deleteClient}
                />
              </>
            ) : (
              <Form
                client={client}
                cancel={() => setShow("table")}
                clientChange={saveClient}
              />
            )}
          </>
        )}
      </Layout>
    </div>
  );
};

export default Home;
