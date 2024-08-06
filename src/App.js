import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import SideComponent from "./SideComponent";
import CentreComponent from "./CentreComponent";

function App() {
  const data = {
    Detail: {
      id: "1",
      name: "John Smith",
      email: "jsmith@test.com",
      number: "123456789",
      Phone: "123456789",
      City: "bangalore",
      State: "karnataka",
      Country: "India",
      Organization: "Company 1",
      JobProfile: "Software Developer",
      AdditionalInfo:
        "Has Bought a lot of products before and a high Value Customer",
    },
    SecondDetail: {
      id: "2",
      name: "ABCD",
      email: "abcd@test.com",
      number: "987654321",
    },
    ThirdDetail: {
      id: "3",
      name: "Tyrion",
      email: "tyrion@test.com",
      number: "123412345",
    },
  };
  const [centreDetail, setCentreDetail] = useState(data.Detail);

  const handleOnFullData = (email) => {
    if (email === data.Detail.email || data.SecondDetail.email || data.ThirdDetail.email){
      setCentreDetail()
    }
    //  data.filter(())
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple React App</p>
      </header>
      <div className="pageContent">
        <div className="reusableComp">
          <SideComponent
            title={data.Detail.name}
            email={data.Detail.email}
            number={data.Detail.number}
            OnDetailClick={handleOnFullData}
          />
          <SideComponent
            title={data.SecondDetail.name}
            email={data.SecondDetail.email}
            number={data.SecondDetail.number}
          />
          <SideComponent
            title={data.ThirdDetail.name}
            email={data.ThirdDetail.email}
            number={data.ThirdDetail.number}
          />
        </div>
        <div className="CentreComponent">
          <CentreComponent Detail={centreDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
