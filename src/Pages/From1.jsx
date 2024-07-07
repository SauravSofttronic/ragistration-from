import { useState } from "react"

const Form1 = () => {
    const [fName, setfName] = useState('')
    const handleFName = (event) => {      //return an event object
        setfName(event.target.value)
    }

    const [lName, setlName] = useState('')
    const handleLName = (event) => {
        setlName(event.target.value)
    }

    const [email, setemail] = useState('')
    const handleEmail = (event) => {
        setemail(event.target.value)
    }

    const [pwd, setpwd] = useState('')
    const handlePwd = (event) => {
        setpwd(event.target.value)
    }

    const [cnfPwd, setcnfPwd] = useState('')
    const handleCnfPwd = (event) => {
        setcnfPwd(event.target.value)
    }

    const [dob, setdob] = useState('')
    const handleDob = (event) => {
        setdob(event.target.value)
    }

    const [city, setcity] = useState('')
    const handleCity = (event) => {
        setcity(event.target.value)
    }

    const [pinCode, setpinCode] = useState('')
    const handlePinCode = (event) => {
        setpinCode(event.target.value)
    }

    const [state, setstate] = useState('')
    const handleState = (event) => {
        setstate(event.target.value)
    }

    const [gender, setgender] = useState('')
    const handleGender = (event) => {
        setgender(event.target.value)
    }

    const [courses, setcourses] = useState([])
    const handleCourses = (event) => {
        if (event.target.checked) {
            setcourses([...courses, event.target.value])
        } else {
            // setcourses(courses.filter((course) => course !== event.target.value))

            const index = courses.indexOf(event.target.value)
            courses.splice(index, 1)
        }
    }

    console.log('fname =>', fName);
    console.log('lname =>', lName);
    console.log('email =>', email);
    console.log('pwd =>', pwd);
    console.log('cnfpwd =>', cnfPwd);
    console.log('dob =>', dob);
    console.log('city =>', city);
    console.log('pincode =>', pinCode);
    console.log('state =>', state);
    console.log('gender =>', gender);
    console.log('courses =>', courses);

    return (
        <div>
            <input
                type="text"
                placeholder="first name"
                id="inpFName"
                value={fName}
                onChange={handleFName}
            />
            <label id="errFName"
            >First Name is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="last name"
                id="inpLName"
                value={lName}
                onChange={handleLName}
            />
            <label id="errLName"
            >Last Name is required</label>
            <br /><br />
            <input
                type="email"
                placeholder="email"
                id="inpEmail"
                value={email}
                onChange={handleEmail}
            />
            <label id="errEmail"
            >Email is required</label>
            <label id="errEmailFormat"
            >Email is not valid</label>
            <br /><br />
            <input
                type="password"
                placeholder="password"
                id="inpPass"
                value={pwd}
                onChange={handlePwd}
            />
            <label id="errPass"
            >Password is required</label>
            <br /><br />
            <input
                type="password"
                placeholder="confirm password"
                id="inpCnfPass"
                value={cnfPwd}
                onChange={handleCnfPwd}
            />
            <label id="errCnfPass"
            >Confirm Password is required</label>
            <label id="errMatch"
            >Password and Confirm Password not matching</label>
            <br /><br />
            <input
                type="date"
                id="inpDob"
                value={dob}
                onChange={handleDob}
            />
            <label id="errDob"
            >Date of Birth is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="city"
                id="inpCity"
                value={city}
                onChange={handleCity}
            />

            <br /><br />
            <input
                type="number"
                placeholder="pin code"
                id="inpPinCode"
                value={pinCode}
                onChange={handlePinCode}
            />
            <br /><br />

            <select
                id="selectState"
                value={state}
                onChange={handleState}
            >
                <option value="MH">MH</option>
                <option value="Goa">Goa</option>
                <option value="MP">MP</option>
                <option value="Gujrat">Gujrat</option>
                <option value="HP">HP</option>
            </select>
            <br /><br />

            <input
                type="radio"
                value="male"
                name="gender"
                id="radioMale"
                onClick={handleGender}
            />
            <label>male</label>
            <br />
            <input
                type="radio"
                value="female"
                name="gender"
                id="radioFemale"
                onClick={handleGender}
            />
            <label>female</label>
            <br />
            <input
                type="radio"
                value="others"
                name="gender"
                id="radioOthers"
                onClick={handleGender}
            />
            <label>others</label>
            <br />
            <label id="errGender">
                please select your gender</label
            >
            <br /><br />

            <input
                type="checkbox"
                id="chkHTML"
                value={'HTML'}
                onClick={handleCourses}
            />
            <label >HTML</label>
            <br />
            <input
                type="checkbox"
                id="chkCSS"
                value={'CSS'}
                onClick={handleCourses}
            />
            <label >CSS</label>
            <br />
            <input
                type="checkbox"
                id="chkJS"
                value={'JS'}
                onClick={handleCourses}
            />
            <label >JS</label>
            <br />
            <input
                type="checkbox"
                id="chkReact"
                value={'React'}
                onClick={handleCourses}
            />
            <label>React</label>
            <br />
            <label id="errCourses">
                please select your courses</label>
            <br /><br />

            <button>Submit</button>
        </div>
    )
}

export default Form1





{/* ============================================================================= */ }
{/* 
// import { useState } from 'react'

// const From1 = () => {

//     const [fname, setfname] = useState('')
//     const handleFName = (event) => {
//         // console.log(event);             //return an event object
//         // console.log(event.target);       //return an html element where that event is happeing                //jis pe event okar ho raha hai usepe  honga
//         setfname(event.target.value)//return value attribute of that html element
//     }
//     // ==========================
//     const [Lname, setLname] = useState('')
//     const handleLName = (event) => {
//         setLname(event.target.value)
//     }
//     return (
//         <div>
//             <input type="text"
//                 placeholder="First name"
//                 id="inpFName"
//                 value={fname}
//                 onChange={handleFName} />
//             <label id="errFName">First Name is required</label>
//             <br /> <br />

//             <input type="text"
//                 placeholder="Last name"
//                 id="inpLName"
//                 value={Lname}
//                 onChange={handleLName} />
//             <label id="errLName">Last Name is required</label>
//             <br /> <br />

//             <input type="email"
//                 placeholder="email"
//                 id="inpEmail"
//                 value={pwd}
//                 onChange={handlepwd}
//             />
//             <label id="errEmail">Email is required</label>
//             <br /> <br />
//             <label id="errEmailFormat">Email is not valid</label>
//             <br /> <br />

//             <input type="password" placeholder="password" id="inpPass" />
//             <label id="errPass">PassWord is required</label>
//             <br /> <br />

//             <input type="password" placeholder="password confrom" id="inpCnfPass" />
//             <label id="errCnfPass">Confirm PassWord is required</label>
//             <br /> <br />
//             <label id="errMatch">password and Confirm PassWord not
//                 matching</label>
//             <br /> <br />

//             <input type="date" id="inpDate" />
//             <label id="errDate">Date Of Birth is required</label>
//             <br /> <br />
//             <input type="text" placeholder="city" id="inpCity" />
//             <br /><br />
//             <input type="number" placeholder="pin-code" id="inpPinCode" />
//             <br /> <br />

//             <select id="SelectState">
//                 <option value="MH">MH</option>
//                 <option value="MP">MP</option>
//                 <option value="GOA">GOA</option>
//                 <option value="HP">HP</option>
//                 <option value="AP">AP</option>
//             </select>
//             <br /><br />

//             <input type="radio" value="male" name="gender" id="radiomale" />
//             <label>male</label>
//             <br /> <br />

//             <input type="radio" value="female" name="gender" id="radioFemale" />
//             <label>female</label>
//             <br /> <br />

//             <input type="radio" value="others" name="gender" id="radioOther" />

//             <label id="errgender">Please Select a Gender</label>
//             <br /> <br />

//             <input type="checkbox" id="chkHTML" />
//             <label>HTML</label>
//             <br /> <br />

//             <input type="checkbox" id="chkCSS" />
//             <label>CSS</label>
//             <br /> <br />

//             <input type="checkbox" id="chkJS" />
//             <label>JS</label>
//             <br /> <br />

//             <input type="checkbox" id="chkReact" />
//             <label>React</label>
//             <br /> <br />

//             <label id="errCourses">Please Select your Courses</label>
//             <br /> <br />
//             <button>Submit</button>
//         </div>
//     )
// }
// export default From1
 */}
