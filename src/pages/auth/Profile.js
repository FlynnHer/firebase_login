import { useEffect, useState } from "react";
import { useAuth } from "../../fireBase"

function Profile() {
  const currentUser = useAuth();
  const [ photoURL, setPhotoURL ] = useState("https://en.wikipedia.org/wiki/User_%28computing%29#/media/File:User_icon_2.svg")
  const handleFileSelect = (e)=> {
    console.log(e.target.value)
  }
  const handleUpload = ()=> {
    console.log("Upload")
  }

  useEffect(()=> {
    if (currentUser){
      console.log("있음", photoURL);
      setPhotoURL(photoURL);
    }
    // console.log("없음", currentUser.photoURL);
  }, [currentUser])

  return (
    <div className="fields">
      hello
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>
  )
}

export default Profile;