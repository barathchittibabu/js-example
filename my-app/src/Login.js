import React,{Component} from "react";

// const style = {
//     padding:"30px",
//     backgroundColor:"blue"
// }

const Login = ()=>{
    return(
        <form action="" style={{borderRadius:"20px", padding:"60px",backgroundColor:"blue" , fontSize:"40px",alignItems:"center",paddingTop:"10%",paddingBottom:"20%"}}>
            <div>
            <label htmlFor="email" style={{ paddingLeft:"42%"}}>email</label><br/>
            <div style={{paddingLeft:"32%"}}>
            <input type="text" name="email" id="email" style={{ width:"40%",fontSize:"20px",borderRadius:"14px"}}/>
            </div>
            </div>
            <div>
            <label htmlFor="password" style={{ paddingLeft:"40%"}}>password</label><br/>
            <div style={{paddingLeft:"32%"}}>
            <input type="password" name="password" id="password" style={{ width:"40%",fontSize:"20px",borderRadius:"13px"}}/>
            </div>
            </div>
            <div style={{paddingLeft:"40.6%"}}>
            <button type="submit" style={{marginTop: "8px", display: "inline-block",fontSize:"20px",color: "white",background: "red",borderRadius: "0.5rem",cursor: "pointer",padding: "10px 30px" }}> Submit </button>
            </div>
        </form>
    )
}

export default Login;