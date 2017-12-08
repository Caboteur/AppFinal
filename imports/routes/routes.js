import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Actualites from '../components/Actualites.js';
import NewArticles from '../components/NewArticles.js';
import Slide from '../components/Slide.js';

import Mainlayout from '../layouts/Mainlayout.js';

FlowRouter.route('/', {
  name: 'home',
  action: function () {
    mount(Mainlayout, { content: <Actualites /> });
  },
});


FlowRouter.route('/NewArticles', {
  name: 'NewArticles',
  action: function () {
    mount(Mainlayout, { content: <NewArticles /> });
  },
});

FlowRouter.route('/Slide', {
  name: 'Slide',
  action: function () {
    mount(Mainlayout, { content: <Slide /> });
  },
});
