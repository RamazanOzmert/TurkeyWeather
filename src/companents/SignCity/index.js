import React, { useState } from 'react'
import {useFormik} from 'formik'
import  validations from './validations'

import {useCity} from "C:/Users/ramaz/OneDrive/Masaüstü/React_GetStarted/weather_app/src/context/CityContext.js"

function SignCity() {
    const {city,setCity} = useCity()
    const [citys,setCitys] = useState([
    "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ",
     "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", 
     "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", 
     "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ])

    const{ handleSubmit, handleChange, values,errors}=useFormik({
        initialValues:{
            cityF:city,
        },
        onSubmit:(values)=>{
            setCity(values.cityF)
            console.log('submit: ',values)
        },
        validationSchema: validations,
    })
    console.log(errors);
  return (
    <div>
        <form onSubmit={handleSubmit} >
         
            <label htmlFor='cityF'>city: </label>
            <select name="cityF" value={values.cityF} onChange={handleChange} >
            {
                citys.map(c=>
                    <option key={c} value={c} >{c}</option>  
                )
            }
            </select> 
            <button type='submit'>ara</button>
        </form>
    </div>
  )
}

export default SignCity