import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Actualites from '../components/Actualites.js';
import Profile from '../components/Profile.js';
import Admin from '../containers/admin.js';
import Slide from '../containers/Slide.js';
import Connection from '../containers/Connection.js';
import MainArticle from '../components/MainArticle.js';

import Welcome from '../containers/Welcome.js'

import Mainlayout from '../layouts/Mainlayout.js';

FlowRouter.route('/Actualites', {
  name: 'home',
  action: function () {
    mount(Mainlayout, { content: <Actualites /> });
  },
});


FlowRouter.route('/Admin', {
  name: 'Admin',
  action: function () {
    mount(Mainlayout, { content: <Admin /> });
  },
});

FlowRouter.route('/Profile', {
  name: 'Profile',
  action: function () {
    mount(Mainlayout, { content: <Profile /> });
  },
});

FlowRouter.route('/Slide', {
  name: 'Slide',
  action: function () {
    mount(Mainlayout, { content: <Slide /> });
  },
});

FlowRouter.route('/Connection', {
  name: 'Connection',
  action: function () {
    mount(Mainlayout, { content: <Connection /> });
  },
});

FlowRouter.route('/Welcome', {
  name: 'Welcome',
  action: function () {
    mount(Mainlayout, { content: <Welcome /> });
  },
});

FlowRouter.route('/MainArticle', {
  name: 'Welcome',
  action: function () {
    mount(Mainlayout, { content: <MainArticle /> });
  },
});
