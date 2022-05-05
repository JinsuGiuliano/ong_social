import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from './profile/profile.component';
import ProfileById from './profile/profileById.component';
const ProfilePage = () => {


  return (
      <Routes>
        <Route index element={<Profile />} />
        <Route path=':userId' element={<ProfileById />} />
      </Routes>
    );
  }

export default ProfilePage;