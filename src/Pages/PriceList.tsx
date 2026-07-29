import React from "react";
import './PriceList.css'
import {PriceListArray} from '../PriceListData';
import NavBar from "../../components/NavBar";
import PageHero from "../../components/PageHero"
import Footer from "../../components/Footer";

function Tests() {
  return(
    <section className="tests">
      <h2>Individual Tests</h2>
      <div className="table-container"> 
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Sample Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
        
        {PriceListArray.map((item:{
        id:number,
        name:string,
        price:number,
        department:string,
        sampleType:string,
        prerequisite:string
        })=>(
            
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.sampleType}</td>
                <td>{item.price}</td>
              </tr>
        ))}

            </tbody>
          </table>
      </div>
    </section>
  )
}

function Pakages(){
  return(
    <section className="pakages">
      <h2>Pakages</h2>
    </section>
  )
}

export default function PriceList() {
  return(
    <>
    <NavBar />

    <PageHero text="Price List" subText="All our tests and Pakages" />

    <Tests /> 

    <Pakages />

    <Footer />
    </>
  )
}