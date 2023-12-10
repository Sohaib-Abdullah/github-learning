import Detail from "./components/detail/Detail";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Student from "./components/student/Student";
import Teachers from "./components/teacher/Teachers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <Info />
      <Student />
      <Teachers />
    </div>
  );
}

export default App;
