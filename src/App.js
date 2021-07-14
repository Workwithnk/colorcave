import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Mumbai from "./Components/Mumbai";
import NavBar from "./Components/NavBar";
import { MumbaiData } from "./ColorsArray/MumbaiData";
import { DelhiData } from "./ColorsArray/DelhiData";
import "./CSS/App.css";
import Delhi from "./Components/Delhi";
import { ChennaiData } from "./ColorsArray/ChennaiData";
import Chennai from "./Components/Chennai";
import { KolkataData } from "./ColorsArray/KolkataData";
import Kolkata from "./Components/Kolkata";
import { AhmedabadData } from "./ColorsArray/AhmedabadData";
import Ahemdabad from "./Components/Ahemdabad";
import { SuratData } from "./ColorsArray/SuratData";
import Surat from "./Components/Surat";
import Rajkot from "./Components/Rajkot";
import { RajkotData } from "./ColorsArray/RajkotData";
import { JaipurData } from "./ColorsArray/JaipurData";
import Jaipur from "./Components/Jaipur";
import { BangaloreData } from "./ColorsArray/BangaloreData";
import Bangalore from "./Components/Bangalore";
import { HyderabadData } from "./ColorsArray/HyderabadData";
import Hyderabad from "./Components/Hyderabad";
import Pune from "./Components/Pune";
import { PuneData } from "./ColorsArray/PuneData";
import { AgraData } from "./ColorsArray/AgraData";
import Agra from "./Components/Agra";
import { VadodaraData } from "./ColorsArray/VadodaraData";
import Vadodara from "./Components/Vadodara";
import Vijayawada from "./Components/Vijayawada";
import { VijayawadaData } from "./ColorsArray/VijayawadaData";
import Kota from "./Components/Kota";
import { KotaData } from "./ColorsArray/KotaData";
import { BareillyData } from "./ColorsArray/BareillyData";
import Bareilly from "./Components/Bareilly";
import Noida from "./Components/Noida";
import { NoidaData } from "./ColorsArray/NoidaData";
import { IndoreData } from "./ColorsArray/IndoreData";
import Indore from "./Components/Indore";
import { BhopalData } from "./ColorsArray/BhopalData";
import Bhopal from "./Components/Bhopal";
import { ChandigarhData } from "./ColorsArray/ChandigarhData";
import Chandigarh from "./Components/Chandigarh";
import Footer from "./Components/Footer";
import { DehradunData } from "./ColorsArray/DehradunData";
import Dehradun from "./Components/Dehradun";
import { NagpurData } from "./ColorsArray/NagpurData";
import Nagpur from "./Components/Nagpur";
import { AmritsarData } from "./ColorsArray/AmritsarData";
import Amritsar from "./Components/Amritsar";
import { SrinagarData } from "./ColorsArray/SrinagarData";
import Srinagar from "./Components/Srinagar";
import { GuwahatiData } from "./ColorsArray/GuwahatiData";
import Guwahati from "./Components/Guwahati";
import Jodhpur from "./Components/Jodhpur";
import { JodhpurData } from "./ColorsArray/Jodhpur";
import Mathura from "./Components/Mathura";
import { MathuraData } from "./ColorsArray/MathuraData";
import Chittoor from "./Components/Chittoor";
import { ChittoorData } from "./ColorsArray/ChittoorData";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/Mumbai" component={Mumbai} />
          <Route path="/Delhi" component={Delhi} />
          <Route path="/Chennai" component={Chennai} />
          <Route path="/Kolkata" component={Kolkata} />
          <Route path="/Ahemdabad" component={Ahemdabad} />
          <Route path="/Surat" component={Surat} />
          <Route path="/Rajkot" component={Rajkot} />
          <Route path="/Jaipur" component={Jaipur} />
          <Route path="/Bangalore" component={Bangalore} />
          <Route path="/Hyderabad" component={Hyderabad} />
          <Route path="/Pune" component={Pune} />
          <Route path="/Agra" component={Agra} />
          <Route path="/Vadodara" component={Vadodara} />
          <Route path="/Vijayawada" component={Vijayawada} />
          <Route path="/Bareilly" component={Bareilly} />
          <Route path="/Noida" component={Noida} />
          <Route path="/Kota" component={Kota} />
          <Route path="/Indore" component={Indore} />
          <Route path="/Bhopal" component={Bhopal} />
          <Route path="/Chandigarh" component={Chandigarh} />
          <Route path="/Dehradun" component={Dehradun} />
          <Route path="/Nagpur" component={Nagpur} />
          <Route path="/Amritsar" component={Amritsar} />
          <Route path="/Srinagar" component={Srinagar} />
          <Route path="/Guwahati" component={Guwahati} />
          <Route path="/Jodhpur" component={Jodhpur} />
          <Route path="/Mathura" component={Mathura} />
          <Route path="/Chittoor" component={Chittoor} />
        </Switch>
        <div className="flateColors">
          <h1 className="ColorsTitle">Flate Colors</h1>
          <div className="AllFalteColors">
            <NavLink to="/Mumbai">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {MumbaiData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Mumbai </h4>
                </div>
              </div>
            </NavLink>

            <NavLink to="/Delhi">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {DelhiData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Delhi </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Chennai">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {ChennaiData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Chennai </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Kolkata">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {KolkataData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Kolkata </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Ahemdabad">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {AhmedabadData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Ahemdabad </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Surat">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {SuratData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Surat </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Rajkot">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {RajkotData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Rajkot </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Jaipur">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {JaipurData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Jaipur </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Bangalore">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {BangaloreData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Bangalore </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Hyderabad">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {HyderabadData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Hyderabad </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Pune">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {PuneData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Pune </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Agra">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {AgraData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Agra </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Vadodara">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {VadodaraData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Vadodara </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Vijayawada">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {VijayawadaData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Vijayawada </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Bareilly">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {BareillyData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Bareilly </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Noida">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {NoidaData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Noida </h4>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="PatternsData">
          <h1 className="ColorsTitle">Patterns</h1>
          <div className="AllPatterns">
            <NavLink to="/Kota">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {KotaData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Kota </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Indore">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {IndoreData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Indore </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Bhopal">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {BhopalData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Bhopal </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Chandigarh">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {ChandigarhData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Chandigarh </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Dehradun">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {DehradunData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Dehradun </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Nagpur">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {NagpurData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Nagpur </h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Amritsar">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {AmritsarData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Amritsar</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Srinagar">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {SrinagarData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Srinagar</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Guwahati">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {GuwahatiData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Guwahati</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Jodhpur">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {JodhpurData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Jodhpur</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Mathura">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {MathuraData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Mathura</h4>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Chittoor">
              <div className="Mumbai_App_Section">
                <div className="Mumbai_App">
                  {ChittoorData.map((data) => {
                    return (
                      <div
                        key={data.id}
                        style={{ backgroundColor: data.hex, height: "25px" }}
                      ></div>
                    );
                  })}
                  <h4 className="Color_Section_Name">Chittoor</h4>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
