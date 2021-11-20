import React, { useState,forwardRef,useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ContactSupport } from '@material-ui/icons';
import { Typography,Grid } from '@material-ui/core';
import countries from "./GeoLocation";
import { red } from '@material-ui/core/colors';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";



const Information = forwardRef((props,ref) => {
  
  const [email,setEmail] = useState("");
  const [emailError,setEmailError] = useState(false);

  const [Fname, setFname] = useState("");
  const [FnameError, setFnameError] = useState(false);

  const [Lname, setLname] = useState("");
  const [LnameError, setLnameError] = useState(false);

  const [Address, setAddress] = useState("");
  const [AddressError, setAddressError] = useState(false);

  const [Phone, setPhone] = useState("");
  const [PhoneError, setPhoneError] = useState(false);


  useImperativeHandle(ref, () => ({

    Phone,
    region,
    country,
    email,
    Fname,
    Lname,
    Address,

    handleEmailError(){
        setEmailError(true);
      },

    handleFnameError(){
        setFnameError(true);
    },

    handleLnameError(){
        setLnameError(true);
    },

    handleAddressError(){
      setAddressError(true);
    },

    handlePhoneError(){
      setPhoneError(true);
    },

  }));

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }));

  const classes = useStyles();

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div>
    <Grid direction="row" justifyContent="center" alignItems="center" spacing={3} container>
                <Grid item xs={12} lg={12}>
                <TextField
                    id="outlined-full-width"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    type="email"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e)=>{setEmail(e.target.value);setEmailError(false);}}
                    error={emailError}
                    required
                />
                    <br/>
                    <Typography variant="h6">Shipping address</Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <br/>  
                    <TextField
                    id="outlined-full-width"
                    label="First Name"
                    style={{ margin: 8 }}
                    placeholder="Fname"
                    type="text"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e)=>{setFname(e.target.value);setFnameError(false);}}
                    error={FnameError}
                    required
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <br/>  
                    <TextField
                    id="outlined-full-width"
                    label="Last Name"
                    style={{ margin: 8 }}
                    placeholder="Lname"
                    type="text"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e)=>{setLname(e.target.value);setLnameError(false);}}
                    error={LnameError}
                    required
                    />
                </Grid>
                <Grid item xs={12} lg={12}>
                <TextField
                    id="outlined-full-width"
                    label="Address"
                    style={{ margin: 8 }}
                    placeholder="Address"
                    type="text"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e)=>{setAddress(e.target.value);setAddressError(false);}}
                    error={AddressError}
                    required
                />
                </Grid>
                <Grid item xs={12} lg={12}>
                <TextField
                    color="primary"
                    id="outlined-full-width"
                    label="Phone Number"
                    style={{ margin: 8,color:"black" }}
                    placeholder="Phone Number"
                    type="tel"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e)=>{setPhone(e.target.value);setPhoneError(false);}}
                    error={PhoneError}
                    required
                />
                </Grid>
                <Grid item xs={12} lg={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={handleChangeCountry}
                  >
                    {countries.map((country) => (
                      <MenuItem
                        value={country.countryName}
                        key={country.countryShortCode}
                      >
                        {country.countryName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Region</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    onChange={handleChangeRegion}
                    disabled={!country}
                  >
                    {country
                      ? countries
                          .find(({ countryName }) => countryName === country)
                          .regions.map((region) => (
                            <MenuItem value={region.name} key={region.shortCode}>
                              {region.name}
                            </MenuItem>
                          ))
                      : []}
                  </Select>
                </FormControl>
              </Grid>
              
    </Grid>
      
    </div>
  );
});

export default Information;