import Header from "./components/Header";

const tab = ['hicham', 'ashar']
// const dataApi = {
//   user: "hicham",
//   user2: "Ashar",
//   date: Date()
// }

function App() {

  return (
    <div className="App">
      <Header user={tab} />

    </div>
  );
}
// user={dataApi.user} user2={dataApi.user2} date={dataApi.date}

export default App;
