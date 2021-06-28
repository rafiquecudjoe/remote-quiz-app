import React from "react";
import pic from "../asset/images/setting.svg";
import { Input, Label, Button } from "@windmill/react-ui";

function Settings() {
  return (
    <div className="flex flex-row bg-black-500 min-h-screen">
      <div className=" flex-1  flex-colomn ">
        <h1 className="my-2 ml-28 font-bold">Edit Profile</h1>
        <Label>
          <span className="mt-2"> Full Name</span>
          <Input type="text" value="Rafique Adam Cudjoe" />
        </Label>
        <Label className="mt-2">
          <span> Email</span>
          <Input type="email" value="Rasgalazy5@gmail.com" />
        </Label>
        <Label Label className="mt-2">
          <span>Username</span>
          <Input type="text" value="Rafique" />
        </Label>
        <Label Label className="mt-2">
          <span>Contact Number</span>
          <Input type="tel" value="+233544413229" />
        </Label>
        <Label className="mt-2">
          <span>Address</span>
          <Input type="text" value="Mango Road, KNUST, Kumasi" />
        </Label>
        <Label Label className="mt-2">
          <span>City</span>
          <Input type="text" value="Kumasi" />
        </Label>
        <Label className="mt-2">
          <span>Country</span>
          <Input type="text" value="Ghana" />
        </Label>
        <Label className="mt-2">
          <span>Password</span>
          <Input type="password" value="Flipmone1" />
        </Label>
        <Button>Save</Button>
      </div>
      <div className="flex-1 ">
        <img src={pic} alt="pic" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default Settings;
