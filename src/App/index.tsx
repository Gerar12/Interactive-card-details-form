import { FormProvider } from "../Context/ContextApp";
import Form from "../components/Form";
import HeaderCard from "../components/HeaderCard";
import Layout from "../utils/Layout";

const App = () => {
  return (
    <>
      <FormProvider>
        <Layout>
          <HeaderCard />
          <Form />
        </Layout>
      </FormProvider>
    </>
  );
};

export default App;
