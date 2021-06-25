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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/Mumbai" component={Mumbai}></Route>
          <Route path="/Delhi" component={Delhi} />
          <Route path="/Chennai" component={Chennai} />
          <Route path="/Kolkata" component={Kolkata} />
          <Route path="/Ahemdabad" component={Ahemdabad} />
          <Route path="/Surat" component={Surat} />
          <Route path="/Rajkot" component={Rajkot} />
        </Switch>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
