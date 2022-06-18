import "./new.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { BASE_URL } from "../../env";
import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom'
import Axios from 'axios';
//react-icons
import {BsUpload} from 'react-icons/bs';
const EditArtistForm = (props) => {
  const [file, setFile] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [fname, setFname]=useState();
  const [lname, setLname]=useState();
  const [description, setDescription]=useState();
  const [prgColor, setPrgColor]=useState('green');
  const [prgrWidth, setPrgrWidth]=useState();
  const [progLevel, setProgLevel]=useState();
  const [artId, setArtId]=useState();
  let { id } = useParams();
useEffect(
  
  ()=>{
    getSingleUser();
  }
,[])
const getSingleUser=  async ()=>{
 await Axios.get(`BASE_URL`+"/artist/"+props.match.params.id)
.then((result)=>setArtistData(result.data));

}
const onSubmitHandler=async(e)=>{
  const endpt = BASE_URL+"/artist/";
const formData = new FormData();
formData.append('artist_name',fname)
formData.append('artist_avatar',file)
formData.append('artist_description',description)



e.preventDefault();
  const createArtist = await Axios.post(endpt,
  formData, {onUploadProgress:progressEvent=>{
    setProgLevel(Math.round(progressEvent.loaded / progressEvent.total*100))
  }}
  
  ).then((res)=>{
    console.log(res);
  })
}

const progresStyle={
  backgroundColor:"red",
  width:progLevel+"%",


}
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{props.title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                    
                      <div className="left">
                          <img
                            src={
                              artistData.artist_avatar
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                          />
                          <BsUpload className="icon" htmlFor="filtage" />
                         
                          <div className="progressbar" style={progresStyle}>{progLevel}</div>
                      </div>
              
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
                <div className="formInput">
                  <label>First Name</label>
                  <input type="text" placeholder="enter your name" onChange={e=>setFname(e.target.value)} value={artistData.artist_name}/>
                </div>

                <div className="formInput">
                  <label>Description</label>
                  <textarea  rows="3" className="textar" onChange={e=>setDescription(e.target.value)}>

                  </textarea>
                  
                </div>
              <button type="submit" >Send</button>
              <button onClick={()=>console.log(artId)} >Edit</button>
            </form>
            <button onClick={()=>console.log(artistData)}>Text</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArtistForm;
