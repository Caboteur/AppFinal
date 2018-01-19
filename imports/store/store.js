
import {ReactiveVar} from 'meteor/reactive-var';

const loggedin = new ReactiveVar(false);
const user = new ReactiveVar({});
const mainArticle = new ReactiveVar();

const login = (mail, password, callback)=>{
  Meteor.loginWithPassword(mail, password,(err)=>{
    if(err){
      callback(err);
      loggedin.set(false);
      console.log(err);
      console.log(loggedin.get())
    } else {
      callback();

      Meteor.call('userInfo', Meteor.userId(), (err, res)=>{
        if(err){
          console.log(err)
        } else {
          user.set(res);
          console.log(res);
          loggedin.set(Meteor.userId());
        }
      });
    }
  });
};

const logout = (callback)=>{
  Meteor.logout((err)=>{
    if(err){
      callback(err)
    } else {
      loggedin.set(false);
      callback();
    }
  });

};



export default userStore = {
  loggedin,
  user,
  login,
  logout,
  mainArticle
};
