import Header from "./components/Header";
import InfoWebApi from "./components/StatesEtProps";
import InputCallback from "./components/InputCallback";


import ControleAge from "./components/ControleAge";

const tab = ['hicham', 'ashar']
// const dataApi = {
//   user: "hicham",
//   user2: "Ashar",
//   date: Date()
// }

function App() {

  return (
    <div className="App">
      <InfoWebApi />

      <ControleAge />
      <InputCallback />
      <Header user={tab} />

    </div>
  );
}
// user={dataApi.user} user2={dataApi.user2} date={dataApi.date}

export default App;
