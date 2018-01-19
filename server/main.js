const Articles = new Mongo.Collection("articles");
const Profiles = new Mongo.Collection("profiles");
const Pics = new Mongo.Collection("pictures");

Meteor.methods({
  listeArticles: ()=>{
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Articles.find().fetch();
  },
  saveArticle: (obj)=> {

      if(obj.title.length <=1){
        throw new Meteor.Error("Le titre est obligatoire");
      } else {

        Articles.insert(obj);
      }



  },
  removeArticle:(id) => {
    Articles.remove(id);
    console.log("supprimé")
  },
  userInfo(id){
    const result = Meteor.users.findOne({_id: id});
    if(result){
      console.log(result);
      return result;
    } else {
      throw new Meteor.Error(500, 'Utilisateur non trouvé')
    }
  },


  listeProfile: ()=>{
    return Profiles.find().fetch();
  },
  saveProfile: (obj)=> {

      if(obj.title.length <=1){
        throw new Meteor.Error("Le titre est obligatoire");
      } else {

        Profiles.insert(obj);
        console.log(obj);
      }



  },
  removeProfile:(id) => {
    Profiles.remove(id);
    console.log("supprimé")
  },
  sendEmail(to, from, subject, text) {
    // Make sure that all arguments are strings.
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();
    Email.send({ to, from, subject, text });
  },

  listePics: ()=>{
    console.log(Pics.find().fetch())
    return Pics.find().fetch();

  },
  savePics: (obj)=> {

      if(obj.length <=1){
        throw new Meteor.Error("Mettez une photo");
      } else {

        Pics.insert(obj);
        console.log(obj);
      }



  },
  removePics:(id) => {
    Pics.remove(id);
    console.log("supprimé")
  },


});
