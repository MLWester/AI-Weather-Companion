import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Weather Companion</h2>
        <p className="text-gray-600 text-lg">
          Track forecasts, view historical trends, ask AI questions, and save your favorite cities.
        </p>
      </section>
    </Layout>
  );
}
