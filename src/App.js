import Header from "./components/Header";

const dataApi = {
  user: "hicham",
  user2: "Ashar",
  date: Date()
}

function App() {

  return (
    <div className="App">
      <Header user={dataApi.user} user2={dataApi.user2} date={dataApi.date} />

    </div>
  );
}

export default App;
