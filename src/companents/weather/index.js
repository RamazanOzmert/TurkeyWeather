import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SignCity from '../SignCity/index';
import {useCity} from "C:/Users/ramaz/OneDrive/Masaüstü/React_GetStarted/weather_app/src/context/CityContext.js"
import './weather.css'
function Weather() {
  const {city} =  useCity()
  const key="ba51bfa85a228cd9360a5372517bb741"
  const [myData,setDatas] = useState([])


  const [gruplar ,setGruplar] =useState([])
  const [isLoading, setIsLoading] =useState(true)
  useEffect(()=>{
      axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ba51bfa85a228cd9360a5372517bb741&lang=tr&units=metric`)
        .then((res)=>setDatas(res.data['list']))
        .catch((e)=>console.log(e))
        .finally(()=>(setIsLoading(false))
        )
      console.log(myData)
    
    },[isLoading,city]) 

   //{new Date(dat.dt_txt).getDate()}
/*  function duzenleme(){
        let list = myData
        let gList=[]
        let grup= []
        list.map(item=>{
            const date = toString(item.dt_txt)
            console.log( gList.find(date))
            /*
            if(gList.find(date)){//yeni gün
              gList.push(date)
              setGruplar({...gruplar, grup})
              grup={}
              grup.push(date)
              console.log("yeni gün")
            }
            else{//bulunan gün
              grup.push(date)
            }/
          }  
          )
          console.log(gruplar)
         }
         duzenleme() 
         */
   
    
  return (
    <div className='container'>
    <h3>haftalık hava durumu</h3>
    <SignCity/>
    <br/>
    {isLoading && <div>Loading...</div>}
    <h1>{city}</h1>    
    {
      myData.map(dat=><div key={dat.dt}>
         
          <div className='card' style={{backgroundColor:'grey',marginBottom:'5px',color:'white'}}>
            <div className='card-header'>
              <div className='tempts' >
                  <div>
                    <h1>{dat.main.temp} ℃</h1>
                    <p className='hissedilen'>hissedilen: {dat.main.feels_like}°</p>
                  </div>
                  <p>{dat.main.temp_min}°-{dat.main.temp_max}°</p>
              </div>

              <p>{String(dat.dt_txt).toString()}</p>
            </div>
            <div className='card-body'>
              <div className='card-symbol'>
                {dat.weather.map((s,i)=>
                  <>
                    <h3 key={i}>{s.description}</h3>
                    <img src={`https://openweathermap.org/img/wn/${s.icon}@2x.png`}></img>
                  </>
                )}
              </div>
              <p>nem: {dat.main.humidity}</p>
            </div>

            <div className='card-footer'> 
              <h4> wind </h4>
              <p>speed: {dat.wind.speed}</p>
              <p>deg: {dat.wind.deg}</p>
              <p>gust: {dat.wind.gust}</p>
            </div>
          </div>
        </div>)
    }
    </div>
  )
}

export default Weather