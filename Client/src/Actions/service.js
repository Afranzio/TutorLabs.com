import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api';


export const signUp = userSignUp => {
    console.log(userSignUp)
    return axios.post( BASE_URL + "/user/register", userSignUp)
                .then(response => { console.log(response.data); alert (response.data.message) })
                .catch(error => { console.log(error); alert (error + " " + "Check your Email and Password") })
  };


  export const login = term => {
    console.log(term)
    return axios
      .post( BASE_URL + "/user/login", term,
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(response => { console.log(response.data.message); alert (response.data.message) })
      .catch(error => { console.log(error); alert (error + "Check your Email and Password") })
  };

  export const createProfile = profile => {
    console.log(profile)
    return axios
      .post( BASE_URL + "/user/create-profile", profile,
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(response => { console.log(response.message); alert (response.message) })
      .catch(error => { console.log(error) });
    };

  export const forgotPwd = resetPwd => {
      console.log(resetPwd)
      return axios
          .post( BASE_URL + "/user/forget-password", resetPwd,
          {
              headers: { "Content-Type": "application/json" }
          }
          )
          .then(response => { console.log(response.data.message); alert (response.data.message) })
          .catch(error => { console.log(error) });
      };


  export const countryList = () => {
    return axios.get(`${BASE_URL}/masterlist/country`)
        .then(res => {return(res.data)})
        .catch(error => console.log(error))
  }

  export const stateList = (params) => {
    return axios.get(`${BASE_URL}/masterlist/state/${params}`)
        .then(res => {return(res.data)})
        .catch(error => console.log(error))
  }

  export const search = (keyword) => {
    return axios
      .get(`${BASE_URL}/user/freelancer?keyword=${keyword}`)
      .then(res => { return res.data })
  }

  export const getFreelancer = (params) => {
    return axios
      .get(`${BASE_URL}/user/freelancer/${params}`)
      .then(res => { console.log( res.data) })
  }