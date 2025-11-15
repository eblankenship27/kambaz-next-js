/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store"; 
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin")
    setProfile(currentUser);
  }
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  }
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl id="wd-username" defaultValue={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value }) } className="mb-2"/>
          <FormControl id="wd-password" defaultValue={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value }) } type="password" className="mb-2" />
          <FormControl id="wd-firstname" defaultValue={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value})} className="mb-2" />
          <FormControl id="wd-lastname" defaultValue={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value }) } className="mb-2" />
          <FormControl id="wd-dob" defaultValue={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value})} type="date" className="mb-2" />
          <FormControl id="wd-email" defaultValue={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value})} type="email" className="mb-2" />
          <select className="mb-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })} id="wd-role">
            <option value="USER">User</option>       
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>{" "}
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2" > Update </button>
          <Button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn" > Sign out </Button>
        </div>
      )}
      
    </div>
);}
